import './Menu.scss'
import MenuIcons from './MenuIcons'
import Channels from '../Channels/Channels'
import Messages from '../Messages/Messages'

const Menu = () => {
  return (
    <div className='Menu'>
      <MenuIcons />
      <Channels />
      <Messages />
    </div>
  )
}

export default Menu
