import request from 'superagent'
import {
  LostAnimal,
  FoundAnimal,
  NewLostAnimal,
  NewFoundAnimal,
} from '../../models/animals.ts'

const rootUrl = '/api/v1'

export async function getLostAnimals() {
  const res = await request.get(rootUrl + '/lost')

  return res.body.lostAnimals as LostAnimal[]
}

export async function getFoundAnimals() {
  const res = await request.get(rootUrl + '/found')

  return res.body.foundAnimals as FoundAnimal[]
}

export async function addLostAnimal(newLostAnimal: NewLostAnimal) {
  const res = await request.post(`${rootUrl}/lost`).send({ newLostAnimal })
  return res.body.newLostAnimal
}

export async function addFoundAnimal(newFoundAnimal: NewFoundAnimal) {
  const res = await request.post(`${rootUrl}/found`).send({ newFoundAnimal })
  return res.body.newFoundAnimal
}

export async function getContactDetails(id: number, token: string) {
  const res = await request
    .get(`${rootUrl}/found/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}