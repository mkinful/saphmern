import React from 'react';
import useForm from './UseForm';
import validate from './AccInfo';
import './Account.css';

const AccSign = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register today to enjoy our full benefits.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            id="username"
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Create a Username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                        
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                        <input 
                            id="password2"
                            type="password"
                            name="password2"
                            className="form-input"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already registered? <a href="/login">Login</a>
                </span>
            </form>
        </div>
    )
}

export default AccSign;