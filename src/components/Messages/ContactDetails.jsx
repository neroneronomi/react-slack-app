import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';
import './ContactDetails.scss'
import ContactFeed from './ContactFeed';
import ContactChatbox from './ContactChatbox';

const ContactDetails = () => {
  const { id } = useParams();
  const { headers } = useContext(UserContext)
  const [contacts, setContacts] = useState(null)
  const [recipient , setRecipient] = useState()
  const { data, isPending, error } = useFetchGet(
    'http://206.189.91.54//api/v1/users', headers)
    if (data === null) {
      console.log(isPending)
    } else if (contacts === null) {
      setContacts(data.data)
    };
  useEffect(() => {
    if (contacts === null) {
      return
     } else {
       const found = contacts.find(contact => contact.id === parseInt(id))
       setRecipient(found)
     }
  },[id, contacts])

  return (
    <div className='ContactDetails'>
      <div className="contact-header">
       { error && <h2>{ error }</h2> }
       { isPending && <h2>Loading...</h2> }
       { !isPending && <h2>{ recipient.uid }</h2> }
      </div>
      <div className="contact-feed">
        <ContactFeed recipient={recipient} id={id} headers={headers} />
      </div>
      <div className="contact-chat-box">
        <ContactChatbox recipient={recipient} id={id} headers={headers} />
      </div>
    </div>
  )
}

export default ContactDetails
