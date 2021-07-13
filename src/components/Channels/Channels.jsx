import { useContext, useState } from 'react'
import { UserContext  } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';
import ChannelList from './ChannelList';
import CreateChModal from './CreateChModal';

const Channels = () => {
  const { headers } = useContext(UserContext);
  const [stateChannels, setStateChannels] = useState(false)  
  const handleChannels = (e) => {
      setStateChannels(!stateChannels)
  };
  const { data: channels, isPending, error } = useFetchGet(
    'http://206.189.91.54//api/v1/channels', headers)
  return (
    <div className="channel">
      <div className='toggle-channel'>
        <h4 onClick={handleChannels}><i className={stateChannels ? 'fas fa-caret-right fa-rotate-90' : 'fas fa-caret-right'}></i> Channels</h4>
        <CreateChModal />
      </div>
      <div className={stateChannels ? 'channel-list-active' : 'channel-list'}>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { channels && <ChannelList channels={channels} /> }
      </div>
    </div>
  )
}

export default Channels;
