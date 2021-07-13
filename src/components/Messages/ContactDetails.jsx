import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';


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
      console.log('wait lang')
     } else {
       const found = contacts.find(contact => contact.id === parseInt(id))
       setRecipient(found)
     }
  },[id, contacts])


  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { !isPending && 
      <div>
        <h4>{ recipient.uid }</h4>
      </div> 
      }
    </div>
  )
}

export default ContactDetails
