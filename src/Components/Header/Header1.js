import React from "react";
import { Link } from "react-router-dom";

import "./Header1.css";

const Header1 = () => {
  return (
    <div className="o-header1">
      <h5>Hypnotic</h5>
      <div className="o-access-container">
        <Link to="/SignUp">
          <button className="o-button o-button-signin">Sign in</button>
        </Link>
        <Link to="/LogIn">
          <button className="o-button o-button-login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header1;
