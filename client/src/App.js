import React from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Register from './components/Register';
import FindUser from './components/FindUser';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/" render={() => <Register />} />
          <Route exact path="/find" render={() => <FindUser />} />
          <Route
            exact
            path="/update"
            render={props => <UpdateUser props={props} />}
          />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
