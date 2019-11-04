import React from "react";

import "./Header1.css";

const Header1 = () => {
  return (
    <div className="o-header">
      <h5>Hypnotic</h5>
      <div className="o-access-container">
        <button className="o-button o-button-signin">Sign in</button>
        <button className="o-button o-button-login">Login</button>
      </div>
    </div>
  );
};

export default Header1;
