import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import './LoginForm.scss'

const LoginForm = () => {
    const { getHeaders } = useContext(UserContext);
    const [values, setValues] = useState({
        email: "",
        password: "",
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
       
        fetch('http://206.189.91.54//api/v1/auth/sign_in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.errors) || response.status;
                    return Promise.reject(error);
                } else {
                    const userData = {
                        'access-token': response.headers.get("access-token"),
                        client: response.headers.get("client"),
                        expiry: response.headers.get("expiry"),
                        uid: response.headers.get("uid"),
                        id: data.data.id
                    };
                        getHeaders(userData);
    
                };
            })
            .catch(error => {
                console.log(error.toString());
            });
    }
    return (
        <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-content">
                <input 
                    className="login-input" 
                    type="email"
                    name="email"
                    // autoComplete="off"
                    placeholder="Enter Email"
                    required  
                    value={values.email}
                    onChange={handleChange}
                />
            </div>

            <div className="login-content">
                <input 
                    className="login-input" 
                    type="password"
                    name="password"
                    // autoComplete="off"
                    placeholder="Enter Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <button className='login-btn' type='submit'>LOGIN</button>
        </form>
    </div>
    )
}

export default LoginForm;