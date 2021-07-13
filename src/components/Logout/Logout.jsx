import { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import { useHistory } from "react-router-dom";
import "./Logout.scss";

const Logout = () => {
  const { logoutUser } = useContext(UserContext);
  const history = useHistory();
  const handleLogout = (e) => {
    logoutUser()
    history.push("/");
    alert('You are logged out.')
  }
  return (
    <div className='logout'>
      <button className='logout-btn' type='button' onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default Logout;
