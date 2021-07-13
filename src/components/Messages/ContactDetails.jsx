import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

const ContactDetails = () => {
  const { id } = useParams();
  const { contacts } = useContext(UserContext)
  const find = contacts.find(contact => (
    contact.data.includes(id)
  ))

  console.log(find)
  console.log(id)
  return (
    <div>
      {/* <h2>{ contacts.data.email }</h2> */}
    </div>
  )
}

export default ContactDetails
