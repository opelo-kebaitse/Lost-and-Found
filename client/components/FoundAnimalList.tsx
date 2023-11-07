import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFoundAnimals } from '../apis/animals.ts';
import FoundAnimalCard from './FoundAnimalCard.tsx';
import '../styles/index.css';

export default function FoundAnimals() {
  const { data: foundAnimals, isLoading, error } = useQuery(['foundAnimals'], getFoundAnimals);
  const [selectedSpecies, setSelectedSpecies] = useState('All');

const handleChangeSpecies = (selectedValue: React.SetStateAction<string>) => {
  setSelectedSpecies(selectedValue)
}

  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (!foundAnimals || isLoading) {
    return <p>Loading</p>;
  }

  const filteredAnimals =
    selectedSpecies === 'All'
      ? foundAnimals
      : foundAnimals.filter((animal) => animal.species === selectedSpecies);

  return (
    <div className="animal-list-container">
      <h2>Found Animals</h2>
      <div className="filter-container">
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
        {filteredAnimals.map((foundAnimal, index) => (
          <FoundAnimalCard key={index} foundAnimal={foundAnimal} />
        ))}
      </div>
    </div>
  );
}
