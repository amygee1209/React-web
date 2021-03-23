import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import './App.css';

import Profile from './components/Profile/Profile';
import Todo from './components/Todo/Todo';
import Product from './components/Product/Product';
import StarWars from './components/Starwars';
import MemeGen from './components/Meme/MemeGen';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="page-container">
          <div id="content-wrap">
            <header className="navbar-background">
              <div className="display-center">
                <div className="navbar row-space-out">
                  <div className="nav-left row-space-out">
                    <Link to="/meme" className="navbar-item">MemeGenerator</Link>
                    <Link to="/products" className="navbar-item">Products</Link>
                    <Link to="/starwars" className="navbar-item">StarWars</Link>
                  </div>
                  <div className="nav-right row-space-out">
                    <Link to="/todo" className="navbar-item">Todo</Link>
                    <Link to="/profile" className="profile-item">My Profile</Link>
                  </div>
                </div>
              </div>
            </header>

            <div id="top-spacing"/>
            <div className="display-center">
              <Switch>
                <Route path="/" exact component={Profile}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/meme" component={MemeGen}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/products" component={Product}/>
                <Route path="/starwars" component={StarWars}/>
              </Switch>
            </div>
          </div>
          <footer>
            This is rooter section
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
