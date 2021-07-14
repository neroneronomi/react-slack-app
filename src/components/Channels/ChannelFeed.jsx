import { useEffect, useState } from "react";

const ChannelFeed = ({ headers, id }) => {
  const [messages, setMessages] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: headers,
  };
  fetch(`http://206.189.91.54//api/v1/messages?receiver_id=${id}&receiver_class=Channel`, requestOptions)
  .then(response => {
    if (!response.ok) {
        throw Error('could not fetch the data for that resource')
    }
    return response.json();
  })
  .then(data => {
    setMessages(data);
    setIsPending(false);
    setError(null);
  })
  .catch(error => {
    setIsPending(false);
    setError(error);
  })
  // eslint-disable-next-line
  },[messages])
  return (
    <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { !isPending && messages.data.map((message, index) => (
        <div className='message-preview' key={index}>
          <div className="mymessages">
            <h5>{message.sender.uid}</h5>
            <span>{message.body}</span>
            <h6>{message.created_at.substr(11, 5) }</h6> 
          </div>
        </div>
      ))
      }
    </>
  )
}

export default ChannelFeed;
