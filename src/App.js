import React from "react";
import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import Signup from "../src/Components/Signup/Signup";
import Profile from "../src/Components/Profile/Profile";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" component={Login} />
          <Route path="/SignUp" component={Signup} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
