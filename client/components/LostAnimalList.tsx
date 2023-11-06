import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getLostAnimals } from '../apis/animals.ts'

export default function LostAnimals() {
  const {
    data: lostAnimals,
    isLoading,
    error,
  } = useQuery(['lostAnimals'], getLostAnimals)
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

  if (!lostAnimals || isLoading) {
    return (
      <>
        <p>Loading</p>
      </>
    )
  }

  // Filter lost animals by species
  const filteredAnimals =
    selectedSpecies === 'All'
      ? lostAnimals
      : lostAnimals.filter((animal) => animal.species === selectedSpecies)

  return (
    <div>
      <h2>Lost Animals</h2>
      <div>
        <label htmlFor="selected-species">Filter by Species:</label>
        <select
          id="selected-species"
          value={selectedSpecies}
          onChange={(e) => handleChangeSpecies(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Turtle">Turtle</option>
        </select>
      </div>

      <div className="grid-container">
        {filteredAnimals.map((lostAnimal) => (
          <div className="lostAnimal" key={lostAnimal.id}>
            <img
              src={lostAnimal.photo}
              alt={`${lostAnimal.name} the ${lostAnimal.species}`}
            />
            <p>Name: {lostAnimal.name}</p>
            <p>Species: {lostAnimal.species}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
