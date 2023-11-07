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

interface AddLostAnimalFunction {
  formData: NewLostAnimal
  token: string
}
export async function addLostAnimal({
  formData,
  token,
}: AddLostAnimalFunction) {
    const res = await request
    .post(`${rootUrl}/lost`)
    .set('Authorization', `Bearer ${token}`) // set authorization
    .send({ formData })
  return res.body.newLostAnimal
}

interface AddFoundAnimalFunction {
  formData: NewFoundAnimal
  token: string
}

export async function addFoundAnimal({
  formData,
  token,
}: AddFoundAnimalFunction) {
  const res = await request
    .post(`${rootUrl}/found`)
    .set('Authorization', `Bearer ${token}`) // set authorization
    .send({ formData })
  return res.body.newFoundAnimal
}

export async function getContactDetails(id: number, token: string) {
  const res = await request
    .get(`${rootUrl}/found/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}
