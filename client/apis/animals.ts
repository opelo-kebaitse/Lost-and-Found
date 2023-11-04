import request from 'superagent'
import { LostAnimal , FoundAnimal} from '../../models/animals.ts'


const rootUrl = '/api/v1'

export async function getLostAnimals() {
  const res = await request.get(rootUrl + '/lost')

  return res.body.lostAnimals as LostAnimal[]
}

export async function getFoundAnimals() {
  const res = await request.get(rootUrl + '/found')

  return res.body.foundAnimals as FoundAnimal[]
}

export async function getContactDetails(id, token) {
  const res = await request.get(`${rootUrl}/found/${id}`)
  return res.body
}