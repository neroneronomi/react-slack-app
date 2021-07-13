import { Switch, Route } from "react-router-dom"
import Channels from "../../components/Channels/Channels";
import Messages from "../../components/Messages/Messages";
import ChannelDetails from '../../components/Channels/ChannelDetails';
import './Client.scss'
import Logout from "../../components/Logout/Logout";

const Client = () => {
  return (
    <div className='Client'>
      <div className="side-bar-container">
        <div className="side-bar-header">
          <h2>Name Program</h2>
        </div>
          <div className="side-bar-info">
            <div className="sub-info"><i class="fas fa-anchor"></i>Threads</div>
            <div className="sub-info"><i class="fas fa-comment-dots"></i>ALL DMs</div>
            <div className="sub-info"><i class="fas fa-at"></i>Mentions and reactions</div>
            <div className="sub-info"><i class="far fa-bookmark"></i>Saved Items</div>
            <div className="sub-info"><i class="fas fa-angle-double-right"></i>More</div>
          </div>
          <div className="side-bar-channels">
          <Channels />
          </div>
          <div className="side-bar-messages">
          <Messages />
          </div>
          <div className="side-bar-logout">
          <Logout />
          </div>
        
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
