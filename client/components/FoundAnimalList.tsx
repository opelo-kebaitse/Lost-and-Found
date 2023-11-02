import { getFoundAnimals } from '../apis/animals'
import { useQuery } from '@tanstack/react-query'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function FoundAnimals() {
  const {
    data: foundAnimals,
    isLoading,
    error,
  } = useQuery(['foundAnimals'], getFoundAnimals)

  if (error) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!foundAnimals || isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  }
  
  const { getAccessTokenSilently } = useAuth0()

  const handleContactClick =async () => {
    const token = getAccessTokenSilently()
    

  }
  
  return (
    <div>
      <h2>Found Animals</h2>
      <div className="grid-container">
        {foundAnimals.map((foundAnimal) => (
          <div className="foundAnimal" key={foundAnimal.user_id}>
            <img src={foundAnimal.photo} alt={foundAnimal.species} />
            <p>Species: {foundAnimal.species}</p>
            <IfAuthenticated><button onClick={handleContactClick}>See Contact Details</button></IfAuthenticated>
            <IfNotAuthenticated><p>Login for more details</p></IfNotAuthenticated>
          </div>
        ))}
      </div>
    </div>
  )
}
