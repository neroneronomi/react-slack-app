import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';

const FindUser = () => {
  const { headers, getContacts } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value
    });
  };
  const [users, setUsers] = useState(null)
  const { data, isPending } = useFetchGet(
    'http://206.189.91.54//api/v1/users', headers)
    if (data === null) {
      console.log(isPending)
    } else if (users === null) {
      setUsers(data.data)
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = users.find(user => user.uid.includes(values.email))
    if (found === undefined) {
      console.log('Email is not yet registered')
    } else {
      getContacts(found)
      setValues({email:""})
    }
  }
  return (
    <div className='find-user-container'>
    <form className="find-user-form" onSubmit={handleSubmit}>
      <div className="find-user-content">
        <input 
            className="find-user-input" 
            type="email"
            name="email"
            // autoComplete="off"
            placeholder="Enter Email"
            required  
            value={values.email}
            onChange={handleChange}
        />
      </div>
      <button className='find-user-btn' type='submit'><i className="fas fa-search"></i></button>
    </form>
  </div>
  )
}

export default FindUser;
