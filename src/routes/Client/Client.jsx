import MenuTab from '../../components/Menu/MenuTab'
import ChannelDetails from '../../components/Channels/ChannelDetails'
import './Client.scss'

const Client = () => {
    return (
        <div className='Client'>
          <MenuTab />
          <ChannelDetails />
        </div>
    )
}

export default Client
