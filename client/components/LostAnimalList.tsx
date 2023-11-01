import { getLostAnimals } from '../apis/animals.ts'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function LostAnimals() {
  const {
    data: animals,
    isLoading,
    error,
  } = useQuery(['animals'], getLostAnimals)

  if (error) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!animals || isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  }

  return (
    <>
      <div className="grid-container">
        {animals.map((animal) => {
          return (
            <div className="lostAnimal-list" key={animal.user_id}>
              <img src={animal.photo} alt={animal.name} />
              <p>{animal.name}</p>
              <p>{animal.species}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
