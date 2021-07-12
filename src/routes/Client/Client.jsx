import './Client.scss'
import { Switch, Route } from "react-router-dom"
import Channels from "../../components/Channels/Channels";
import Messages from "../../components/Messages/Messages";
import ChannelDetails from '../../components/Channels/ChannelDetails';
import Logout from "../../components/Logout/Logout";

const Client = () => {
  return (
    <div className='Client'>
      <div className="menu-tab">
        <Channels />
        <Messages />
        <Logout />
      </div>
      <Switch>
        <Route path='/client/channels/:id'>
          <div className='channel-details'>
          <ChannelDetails />
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
