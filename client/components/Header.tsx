import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header() {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <header>
    </header>
  )
}

export default Header
