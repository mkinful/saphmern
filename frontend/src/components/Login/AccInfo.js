export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username Required"
    }

    if(!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address Invalid"
    }

    if(!values.password) {
        errors.password = "Password Required"
    } else if (values.password.length < 6) {
        errors.password = "Password Needs To Be 6 Characters Or More"
    }

    if(!values.password2) {
        errors.password2 = "Password Required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords are not a match"
    }
    return errors;
}