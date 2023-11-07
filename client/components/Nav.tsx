import { useAuth0 } from '@auth0/auth0-react';
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx';
import { Link } from 'react-router-dom';
import '../styles/index.css';

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0();

  const handleSignOut = () => {
    logout();
  };

  const handleSignIn = () => {
    loginWithRedirect();
  };

  return (
    <header>
      <div className="nav-container" role="navigation" aria-label="main navigation">
        <div className="title-container">
          <Link to="/" className="title-link">
            <h1 className="header-title">Lost and Found</h1>
          </Link>
        </div>

        <div className="nav-links">
          <ul className="nav-list">
            <li>
              <Link to="/lost-animals">Lost animals</Link>
            </li>
            <li>
              <Link to="/found-animals">Found animals</Link>
            </li>
          </ul>

          <IfAuthenticated>
            <div className="user-actions">
              <Link to="/add-lost-animal">Add Lost Animal</Link>
              <Link to="/add-found-animal">Add Found Animal</Link>
              <br/>
              {user && (
                <>
                  <p>Signed in as: {user?.nickname}</p>
                  <p>Name: {user?.name}</p>
                </>
              )}
              <br/>
              <button className="button" onClick={handleSignOut}>
                Sign out
              </button>
            </div>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <div className="user-actions">
              <button className="button" onClick={handleSignIn}>
                Sign in
              </button>
            </div>
          </IfNotAuthenticated>
        </div>
      </div>
    </header>
  );
}

export default Nav;
