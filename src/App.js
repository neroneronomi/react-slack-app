import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContextProvider from './context/userContext';
import Home from "./routes/Home/Home";
import './App.scss'
import Messages from './routes/Messages/Messages';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/messages'>
              <Messages />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
  
    </div>
  );
}

export default App;
