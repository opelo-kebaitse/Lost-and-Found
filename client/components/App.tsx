import { Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Header from './Header'
import Login from './Login'
import LostAnimalList from './LostAnimalList'

function App() {
  const lostAnimalData: LostAnimals[] = [
    {
      name: 'Fluffy',
      species: 'Cat',
      photo: 'fluffy.jpg',
      user_id: '1',
      user_name: 'John Doe',
      user_contact: 'john@example.com',
    },
    {
      name: 'Rover',
      species: 'Dog',
      photo: 'rover.jpg',
      user_id: '2',
      user_name: 'Jane Smith',
      user_contact: 'jane@example.com',
    },
    {
      name: 'Whiskers',
      species: 'Cat',
      photo: 'whiskers.jpg',
      user_id: '3',
      user_name: 'Alice Johnson',
      user_contact: 'alice@example.com',
    },
  ]

  return (
    <>
      <Header />
      <IfNotAuthenticated>
        <Login />
      </IfNotAuthenticated>

      <IfAuthenticated>
        <Outlet />
      </IfAuthenticated>
      <LostAnimalList lostAnimals={lostAnimalData} />
    </>
  )
}

export default App
