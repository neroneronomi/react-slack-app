import React, { useState } from 'react'
import { registerUser } from '../../context/useApi'
import './RegisterForm.scss'
import Popup from 'reactjs-popup'

const RegisterForm = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(values)
        .then(result => console.log(result))
    }
    return (
        <Popup trigger={<button> Registration </button>} position="left top">
        <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-content">
                <input 
                    className="register-input" 
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter Email"
                    required  
                    value={values.email}
                    onChange={handleChange}
                />
            </div>

            <div className="register-content">
                <input 
                    className="register-input" 
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Enter Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                />
            </div>

            <div className="register-content">
                <input 
                    className="register-input" 
                    type="password"
                    name="password_confirmation"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    required
                    value={values.password_confirmation}
                    onChange={handleChange}
                />
            </div>
            <button className='register-btn' type='submit'>REGISTER</button>
        </form>
    </div>
    </Popup>
    )
}

export default RegisterForm;
