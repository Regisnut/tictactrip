import React from "react";
import "./index.css";

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <nav>
          <div>
            <h1>Tictactrip</h1>
          </div>
          <div className="header--nav">
            <div>Bus</div>
            <div>Train</div>
            <div>Covoiturage</div>
          </div>
        </nav>
      </header>
    );
  };
}

export default Header;
