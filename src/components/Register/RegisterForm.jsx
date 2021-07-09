import React, { useState } from 'react'
import './RegisterForm.scss'

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
        console.log(values)

        fetch('http://206.189.91.54/api/v1/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(values),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    }
    return (
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
    )
}

export default RegisterForm;
