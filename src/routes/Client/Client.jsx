import { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import {Switch, Route} from "react-router-dom"
import useFetchGet from '../../API/useFetchGet';
import './Client.scss'
import ChannelList from '../../components/Channels/ChannelList';
import CreateChannel from '../../components/Channels/CreateChannel';
import ChannelDetails from '../../components/Channels/ChannelDetails';
import AddMember from '../../components/Channels/AddMember';

const Client = () => {
  const { headers } = useContext(UserContext);
  const { data: channels, isPending, error } = useFetchGet(
      'http://206.189.91.54//api/v1/channels', headers)
  return (
    <div className='Client'>
      <div className="create-channel">
        <CreateChannel />
      </div>
      <div className='channel-list'>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        {channels && <ChannelList channels={channels} />}
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
