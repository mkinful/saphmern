import React from 'react';
import useForm from './UseForm';
import validate from './AccInfo';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';

const Login = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="form-content">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label"></label>
                        <h1 className="user">Username or Email</h1>
                        <input 
                            id="username"
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Username or Email"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label"></label>
                        <h1 className="user">Password</h1>
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
                <button className="form-input-btn" type="submit" onClick={() => loginWithRedirect()}>
                    Sign In
                </button>
                <span className="form-input-login">
                     <a href="/account">Create An Account</a>
                </span>
            </form>
        </div>
    )
}

export default Login;