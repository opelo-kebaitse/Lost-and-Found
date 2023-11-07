import express from 'express'
import * as db from '../db/animals.ts'
import { NewFoundAnimal } from '../../models/animals.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

const router = express.Router()

// route to get found animals

router.get('/', async (req, res) => {
  try {
    const foundAnimals = await db.getFoundAnimals()
    res.json({ foundAnimals })
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})

// route to post found animal

router.post('/',checkJwt, async (req: JwtRequest, res) => {
  const { formData } = req.body as { formData: NewFoundAnimal }

  if (!formData) {
    console.error('No data provided')
    return res.status(400).json({ error: 'Bad request' })
  }
  try {
    await db.addFoundAnimal(formData)
    res.status(201).json({ newFoundAnimal: formData })
  } catch (error) {
    console.error('Error adding found animal', error)
    res.status(500).json({ error: 'Failed to add found animal' })
  }
})


//route to get contact details 
// api/v1/found/:id
router.get('/:id',checkJwt, async (req: JwtRequest, res) => {
  try {
    const id = parseInt(req.params.id)
    const contact = await db.getContactDetails(id)
    res.json(contact)
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})
export default router
