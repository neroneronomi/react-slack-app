import { Link } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from '../../context/userContext';

const ContactList = () => {
  const { contacts, deleteContact } = useContext(UserContext);
  return (
    <>
    {(() => {
      if (contacts.length === 0 ) {
        return <h4>No contacts yet.</h4>
      } else {
        return <div>
          {contacts.map((contact, index) => (
            <div className='contact-preview' key={index}>
              <div className="mycontacts">
                <Link to={`/client/messages/${contact.data.id}`}>
                  <span>{contact.data.email} </span>
                </Link>
                <i className="fas fa-times" onClick={() => 
                      {deleteContact(contact.data.id)}}>
                    </i>
              </div>
            </div>
          ))}
        </div>
      }
    })()}
    </>
  )
}

export default ContactList;
