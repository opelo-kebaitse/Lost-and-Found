import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getFoundAnimals } from '../apis/animals.ts'

export default function FoundAnimals() {
  const {
    data: foundAnimals,
    isLoading,
    error,
  } = useQuery(['foundAnimals'], getFoundAnimals)
  const [selectedSpecies, setSelectedSpecies] = useState('All')

  const handleChangeSpecies = (selectedValue: React.SetStateAction<string>) => {
    setSelectedSpecies(selectedValue)
  }

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

  // Filter found animals by species
  const filteredAnimals =
    selectedSpecies === 'All'
      ? foundAnimals
      : foundAnimals.filter((animal) => animal.species === selectedSpecies)

  return (
    <div>
      <h2>Found Animals</h2>
      <div>
        <label>Filter by Species:</label>
        <select
          value={selectedSpecies}
          onChange={(e) => handleChangeSpecies(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Hamster">Hamster</option>
        </select>
      </div>

      <div className="grid-container">
        {filteredAnimals.map((foundAnimal) => (
          <div className="foundAnimal" key={foundAnimal.user_id}>
            <img src={foundAnimal.photo} alt={foundAnimal.species} />
            <p>Species: {foundAnimal.species}</p>
          </div>
        ))}
      </div>
    </div>
  )
}