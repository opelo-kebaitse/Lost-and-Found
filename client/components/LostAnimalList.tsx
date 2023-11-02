import { getLostAnimals } from '../apis/animals.ts'
import { useQuery } from '@tanstack/react-query'

export default function LostAnimals() {
  const {
    data: lostAnimals,
    isLoading,
    error,
  } = useQuery(['lostAnimals'], getLostAnimals)

  if (error) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!lostAnimals || isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  }

  return (
    <div>
      <h2>Lost Animals</h2>
      <div className="grid-container">
        {lostAnimals.map((lostAnimal) => (
          <div className="lostAnimal" key={lostAnimal.user_id}>
            <img src={lostAnimal.photo} alt={lostAnimal.name} />
            <p>Name: {lostAnimal.name}</p>
            <p>Species: {lostAnimal.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}