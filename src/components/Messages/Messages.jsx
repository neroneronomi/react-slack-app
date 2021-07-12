import { useState } from 'react'

const Messages = () => {
  const [stateMessages, setStateMessages] = useState(false)  
  const handleMessages = (e) => {
      setStateMessages(!stateMessages)
  };
  return (
    <div className="messages">
      <div className='toggle-messages' onClick={handleMessages}>
        <h3><i className={stateMessages ? 'fas fa-caret-right fa-rotate-90' : 'fas fa-caret-right'}></i> Messages</h3>
      </div>
    </div>
  )
}

export default Messages;
