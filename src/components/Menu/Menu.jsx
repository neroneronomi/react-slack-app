import './Menu.scss'
import MenuIcons from './MenuIcons'
import Channels from '../Channels/Channels'
import Messages from '../Messages/Messages'
import Logout from "../../components/Logout/Logout";

const Menu = () => {
  return (
    <div className='Menu'>
      <MenuIcons />
      <Channels />
      <Messages />
      <Logout />
   
    </div>
  )
}

export default Menu
