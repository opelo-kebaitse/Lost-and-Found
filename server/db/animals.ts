import connection from './connection.ts'

import { Animals, Animal } from '../../models/animals.ts'

// const columns = ['name', 'species','photo']

export async function getLostAnimals(db = connection): Promise<Animals[]> {
  return db('lost').select()
}
