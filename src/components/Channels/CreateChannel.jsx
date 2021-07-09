import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import './CreateChannel.scss'

const CreateChannel = () => {
    const { headers } = useContext(UserContext);
    const [values, setValues] = useState({
        name: "",
        user_ids: 94
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
    
    fetch("http://206.189.91.54//api/v1/channels", {
        method: 'POST',
        headers: headers,
        body: values
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    console.log(values)
            

        
    };
    
    return (
    <div className='create-channel-container'>
        <form className="create-channel-form" onSubmit={handleSubmit}>
            <div className="create-channel-content">
                <input 
                    className="create-channel-input" 
                    type="text"
                    name="name"
                    // autoComplete="off"
                    placeholder="Enter Channel Name"
                    required  
                    value={values.name}
                    onChange={handleChange}
                />
            </div>
            <button className='create-channel-btn' type='submit'>SUBMIT</button>
        </form>
    </div>
    )
}
export default CreateChannel;
