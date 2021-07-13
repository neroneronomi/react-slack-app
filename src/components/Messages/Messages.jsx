import { useState } from 'react'
import ContactList from './ContactList';
// import FindUser from './FindUser';

const Messages = () => {
  const [stateMessages, setStateMessages] = useState(true)  
  const handleMessages = (e) => {
      setStateMessages(!stateMessages)
  };
  return (
    <div className="messages">
      {/* <FindUser /> */}
      <div className='toggle-messages'>
        <h4 onClick={handleMessages}><i className={stateMessages ? 'fas fa-caret-right fa-rotate-90' : 'fas fa-caret-right'}></i> Direct Messages</h4>
      </div>
      <div className={stateMessages ? 'contact-list-active' : 'contact-list'}>
        <ContactList />
      </div>
    </div>
  )
}

export default Messages;
