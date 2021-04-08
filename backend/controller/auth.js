const User = require('../models/Users');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, email, password,
        });

        sendToken(user, 201, res);
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return next(new ErrorResponse('Email and Password Required', 400))
    }

    try {
        const user = await User.findOne({ email }).select('+password');

        if(!user) {
            return next(new ErrorResponse('Invalid Username or Password', 401))
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch) {
            return next(new ErrorResponse('Email and Password Required', 401))
        }

        sendToken(user, 200, res);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({email});
        
        if(!user) {
            return next(new ErrorResponse('Unable To Send Email', 404))
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://127.0.0.1:3000/passwordreset/${resetToken}`;

        const message = `
            <h1>New Password Reset Requested</h1>
            <p>Click on the link to reset your password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `

        try {
            await sendEmail({
                to: user.email,
                subject: 'Request a Password Reset',
                text: message
            });

            res.status(200).json({ success: true, data: 'Email Sent' });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse('Unable To Send Email', 500))
        }

    } catch (error) {
        next(error);
    }
};

exports.resetpassword = (req, res, next) => {
    res.send('Reset Password Route');
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token })
}; 