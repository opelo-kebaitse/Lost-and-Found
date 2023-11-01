import request from 'superagent'
import type { Animals, Animal } from '../../models/animals.ts'

const rootUrl = '/api/v1'

export async function getLostAnimals() {
  const res = await request.get(rootUrl + '/lost')

  return res.body.animals as Animals[]
}
