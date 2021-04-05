import React, { useState } from 'react';
import AccSign from './AccInfo';
import AccSuccess from './AccSuccess';
import './Account.css';

const Account = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
        <div className="form-container">
            {!isSubmitted ? <AccSign submitForm={submitForm} /> : <AccSuccess />}
        </div>

        </>
    )
}

export default Account;