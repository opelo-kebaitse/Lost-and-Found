import { getFoundAnimals } from '../apis/animals'
import { useQuery } from '@tanstack/react-query'

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

  return (
    <div>
      <h2>Found Animals</h2>
      <div className="grid-container">
        {foundAnimals.map((foundAnimal) => (
          <div className="foundAnimal" key={foundAnimal.user_id}>
            <img src={foundAnimal.photo} alt={foundAnimal.species} />
            <p>Species: {foundAnimal.species}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
