import connection from './connection.ts'

import { LostAnimal, FoundAnimal, NewLostAnimal, NewFoundAnimal} from '../../models/animals.ts'



// LOST ANIMALS FUNCTIONS
export async function getLostAnimals(db = connection): Promise<LostAnimal[]> {
  return db('lost').select('id', 'name', 'species', 'photo')
}


export async function addLostAnimal(newLostAnimal: NewLostAnimal, db = connection): Promise<void> {
  return db('lost').insert({
    name: newLostAnimal.name,
    species: newLostAnimal.species,
    photo: newLostAnimal.photo,
    user_id: newLostAnimal.user_id,
    user_name: newLostAnimal.user_name,
    user_contact: newLostAnimal.user_contact
  });
}


// FOUND ANIMALS FUNCTIONS

export async function getFoundAnimals(db = connection): Promise<FoundAnimal[]> {
  return db('found').select('id', 'species', 'photo')
}