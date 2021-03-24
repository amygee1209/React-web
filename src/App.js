import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Profile from './components/Profile/Profile';
import Todo from './components/Todo/Todo';
import Product from './components/Product/Product';
import StarWars from './components/Starwars';
import MemeGen from './components/Meme/MemeGen';
import Login from './components/Profile/Login';

export default function App() {
  const [ isLogin, setLogin ] = useState(false)

  return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
          <Navbar isLogIn={isLogin}/>
          <div className="display-center">
            <Switch>
              <Route path="/" exact component={Profile}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/meme" component={MemeGen}/>
              <Route path="/todo" component={Todo}/>
              <Route path="/products" component={Product}/>
              <Route path="/starwars" component={StarWars}/>
              <Route path="/login"><Login isLogin={isLogin}/></Route>
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
