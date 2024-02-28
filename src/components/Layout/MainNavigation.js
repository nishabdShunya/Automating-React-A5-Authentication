import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import "./MainNavigation.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedInStatus = authCtx.isLoggedIn;

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedInStatus && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedInStatus && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
