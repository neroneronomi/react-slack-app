import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext';
import { Switch, Route } from "react-router-dom"
import useFetchGet from '../../API/useFetchGet';
import ChannelList from '../../components/Channels/ChannelList';
import CreateChannel from '../../components/Channels/CreateChannel';
import ChannelDetails from '../../components/Channels/ChannelDetails';
import AddMember from '../../components/Channels/AddMember';
import './Client.scss'

const Client = () => {
  const [stateChannels, setStateChannels] = useState(false)  
  const handleChannels = (e) => {
      setStateChannels(!stateChannels)
  };
  const [stateMessages, setStateMessages] = useState(false)  
  const handleMessages = (e) => {
      setStateMessages(!stateMessages)
  };
  const { headers } = useContext(UserContext);
  const { data: channels, isPending, error } = useFetchGet(
      'http://206.189.91.54//api/v1/channels', headers)
  return (
    <div className='Client'>
      <div className="menu-tab">
        <div className="channel">
          <div className="create-channel">
            <CreateChannel />
           </div>
          <div className='toggle-channel' onClick={handleChannels}>
            <h3><i className={stateChannels ? 'fas fa-caret-right fa-rotate-90' : 'fas fa-caret-right'}></i> Channels</h3>
          </div>
          <div className={stateChannels ? 'channel-list-active' : 'channel-list'}>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { channels && <ChannelList channels={channels} /> }
          </div>
        </div>
        <div className="messages">
          <div className='toggle-messages' onClick={handleMessages}>
            <h3><i className={stateMessages ? 'fas fa-caret-right fa-rotate-90' : 'fas fa-caret-right'}></i> Messages</h3>
          </div>
        </div>
      </div>
      <Switch>
        <Route path='/client/channels/:id'>
          <div className='channel-details'>
          <ChannelDetails />
          <AddMember />
          </div>
        </Route>
        <Route path='/client/messages'>
          <h1>Hello Messages</h1>
        </Route>
      </Switch>
    </div>
    )
}

export default Client;
