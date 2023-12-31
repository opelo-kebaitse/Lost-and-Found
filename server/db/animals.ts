import connection from './connection.ts'

import { LostAnimal, FoundAnimal, NewLostAnimal, NewFoundAnimal, ContactDetail} from '../../models/animals.ts'



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

export async function addFoundAnimal(newFoundAnimal: NewFoundAnimal, db = connection): Promise<void> {
  return db('found').insert({
    species: newFoundAnimal.species,
    photo: newFoundAnimal.photo,
    user_id: newFoundAnimal.user_id,
    user_name: newFoundAnimal.user_name,
    user_contact: newFoundAnimal.user_contact
  });
}

// contact details functions

export async function getContactDetails(id: number, db = connection): Promise<ContactDetail> {
  return db('found').where({id}).select('user_name as userName', 'user_id as userId', 'user_contact as userContact').first()
}