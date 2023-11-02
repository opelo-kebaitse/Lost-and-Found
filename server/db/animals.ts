import connection from './connection.ts'

import { LostAnimal, FoundAnimal} from '../../models/animals.ts'

// const columns = ['name', 'species','photo']

export async function getLostAnimals(db = connection): Promise<LostAnimal[]> {
  return db('lost').select()
}


export async function getFoundAnimals(db = connection): Promise<FoundAnimal[]> {
  return db('found').select()
}