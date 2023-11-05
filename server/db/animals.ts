import connection from './connection.ts'

import { LostAnimal, FoundAnimal} from '../../models/animals.ts'


export async function getLostAnimals(db = connection): Promise<LostAnimal[]> {
  return db('lost').select('id', 'name', 'species', 'photo')
}


export async function getFoundAnimals(db = connection): Promise<FoundAnimal[]> {
  return db('found').select('id', 'species', 'photo')
}

export async function getContactDetails(id: number, db = connection): Promise<ContactDetail> {
  return db('found').where({id}).select('user_name as userName', 'user_id as userId', 'user_contact as userContact').first()
}