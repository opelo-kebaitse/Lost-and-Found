import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { getFoundAnimals, getContactDetails } from '../apis/animals.ts'

export default function FoundAnimals() {
  const {
    data: foundAnimals,
    isLoading,
    error,
  } = useQuery(['foundAnimals'], getFoundAnimals)
  const [selectedSpecies, setSelectedSpecies] = useState('All')
  const { getAccessTokenSilently } = useAuth0()
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

  async function showContactDetails(id) {
    const token = getAccessTokenSilently()
    const contact = await getContactDetails(id, token)
    return (
      <>
      <p>Name: {contact.userName}</p>
      <p>Email: {contact.userContact}</p>
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
          <option value="Hamster">Hamster</option>
        </select>
      </div>

      <div className="grid-container">
        {filteredAnimals.map((foundAnimal) => (
          <div className="foundAnimal" key={foundAnimal.id}>
            <img src={foundAnimal.photo} alt={foundAnimal.species} />
            <p>Species: {foundAnimal.species}</p>
            <IfAuthenticated>
              <button value={foundAnimal.id} onClick={(e) => showContactDetails(e.target.value)}>See Contact Details</button>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <p>Login for more details</p>
            </IfNotAuthenticated>
          </div>
        ))}
      </div>
    </div>
  )
}
