import React from 'react'

interface LostAnimals {
  name: string
  species: string
  photo: string
  user_id: string
  user_name: string
  user_contact: string
}

interface LostAnimalListProps {
  lostAnimals: LostAnimals[]
}

const LostAnimalList: React.FC<LostAnimalListProps> = ({ lostAnimals }) => {
  return (
    <div>
      <h2>Lost Animals List</h2>
      <ul>
        {lostAnimals.map((lostAnimal) => (
          <li key={lostAnimals.id}>
            <p>Name: {lostAnimals.name}</p>
            <p>Species: {lostAnimals.species}</p>
            <p>Contact:</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LostAnimalList
