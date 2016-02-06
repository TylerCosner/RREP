import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className = "pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">BRAND</a>
        <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">News</a></li>
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
