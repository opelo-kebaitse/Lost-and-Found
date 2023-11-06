import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  // Log the full user object to the console
  console.log(user)

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <header>
      <NavGroup>
        <nav
          className="nav-container"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="title-container">
            <Link to="/" className="title-link">
              <h1 className="header-title">Lost and Found</h1>
            </Link>
          </div>

          {/* Links to Lost Animals and Found Animals frontend routes */}

          <ul>
            <li>
              <Link to="/lost-animals">Lost animals</Link>
            </li>
            <br />
            <li>
              <Link to="/found-animals">Found animals</Link>
            </li>
            <br />
          </ul>

          <IfAuthenticated>
            <li>
              <Link to="/add-lost-animal">Add Lost Animal</Link>
            </li>
            <br/>
            <li>
              <Link to="/add-found-animal">Add Found Animal</Link>
            </li>
            <NavButton onClick={handleSignOut}>Sign out</NavButton>
            {user && <p>Signed in as: {user?.nickname}</p>}
            <p>Name: {user?.name}</p>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <NavButton onClick={handleSignIn}>Sign in</NavButton>
          </IfNotAuthenticated>
        </nav>
      </NavGroup>
    </header>
  )
}

export default Nav
