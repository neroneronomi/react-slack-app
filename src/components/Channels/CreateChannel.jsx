import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext';
import { createChannel } from '../../API/useFetchPost';
import "./CreateChannel.scss";

const CreateChannel = () => {
  const { headers } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "",
    user_ids: [headers.id]
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
    createChannel(headers, values.name, values.user_ids)
    .then(data => {
        if (data.errors.length !== 0) {
            console.log(data.errors)
        } else {
            console.log('Hello')
        }
    })
    //DITO NAG SUSUCCESS YUNG CREATE CHANNEL.  
    .catch(error => console.log(error))  
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
