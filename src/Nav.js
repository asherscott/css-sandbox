import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={showNav ? "wrapper nav-wrap show-nav" : "wrapper nav-wrap"}>
      <div className="nav-content">
        <ul>
          <li className="selected">Home</li>
          <li>User</li>
          <li>About</li>
          <li>Settings</li>
        </ul>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        className={showNav ? "nav-icon hide-nav" : "nav-icon"}
      >
        {showNav ? "+" : "|||"}
      </button>
    </div>
  );
}

export default Nav;
