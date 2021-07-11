import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContextProvider from './context/userContext';
import Home from "./routes/Home/Home";
import './App.scss'
import Client from './routes/Client/Client';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/client'><Client /></Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
