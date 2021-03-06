import './Client.scss'
import { Switch, Route } from "react-router-dom"
import ChannelDetails from '../../components/Channels/ChannelDetails';
import ContactDetails from '../../components/Messages/ContactDetails'
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header'

const Client = () => {
  return (
    <div className='Client'>
      <Header />
      <Menu />
      <Switch>
        <Route path='/client/channels/:id'>
          <ChannelDetails />
        </Route>
        <Route path='/client/messages/:id'>
          <ContactDetails />
        </Route>
      </Switch>
    </div>
    )
}

export default Client;
