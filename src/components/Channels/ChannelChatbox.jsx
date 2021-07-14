import { useState } from 'react'
import { sendMessage } from '../../API/useFetchPost';

const ChannelChatbox = ({ channelDetails, headers}) => {
  const [values, setValues] = useState({
    body: "",
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
    sendMessage(headers, channelDetails.data.id, 'Channel', values.body)
    setValues({body:""})
    console.log(values.body)
    console.log(channelDetails.data.id)
  }
  return (
    <>
    <form className="send-message-form" onSubmit={handleSubmit}>
      <div className="send-message-content">
        <input 
            className="send-message-input" 
            type="text"
            name="body"
            autoComplete="off"
            // placeholder=""
            required  
            value={values.body}
            onChange={handleChange}
        />
      </div>
      <button className='send-message-btn' type='submit'><i className="fas fa-search"></i></button>
    </form>
    </>
  )
}

export default ChannelChatbox
