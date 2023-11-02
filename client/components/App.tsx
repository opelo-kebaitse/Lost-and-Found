import { Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Header from './Header'
import Login from './Login'
import LostAnimalList from './LostAnimalList'
import FoundAnimalList from './FoundAnimalList'

function App() {
 

  return (
    <>
      <Header />
      <IfNotAuthenticated>
        <Login />
      </IfNotAuthenticated>

      <IfAuthenticated>
        <Outlet />
      </IfAuthenticated>
      <LostAnimalList/>
      <FoundAnimalList/>
    </>
  )
}

export default App
