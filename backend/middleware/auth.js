const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const ErrorResponse = require('../utils/errorResponse');
const ErrorReponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if(!token) {
        return next(new ErrorReponse('Not Authorized To Access This Route', 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if(!user) {
            return next(new ErrorResponse('No User Found'));
        }

        req.user = user;

        next();
    } catch (error) {
        return next(new ErrorResponse('Not Authorized To Access This Route', 401));
    }
}; 