import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={showNav ? "wrapper nav-wrap show-nav" : "wrapper nav-wrap"}>
      <nav className="nav-content">
        <ul>
          <li className="selected link">Home</li>
          <li className="link">User</li>
          <li className="link">About</li>
          <li className="link">Settings</li>
        </ul>
      </nav>
      <button
        onClick={() => setShowNav(!showNav)}
        className={showNav ? "nav-icon hide-nav" : "nav-icon"}
      >
        {showNav ? "<" : "|||"}
      </button>
    </div>
  );
}

export default Nav;
