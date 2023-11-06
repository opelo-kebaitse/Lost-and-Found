import express from 'express'

import * as db from '../db/animals.ts'
import { NewFoundAnimal } from '../../models/animals.ts'

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

router.post('/', async (req, res) => {
  const { newFoundAnimal } = req.body as { newFoundAnimal: NewFoundAnimal }

  if (!newFoundAnimal) {
    console.error('No data provided')
    return res.status(400).json({ error: 'Bad request' })
  }
  try {
    await db.addFoundAnimal(newFoundAnimal)
    res.status(201).json({ newFoundAnimal: newFoundAnimal })
  } catch (error) {
    console.error('Error adding found animal', error)
    res.status(500).json({ error: 'Failed to add found animal' })
  }
})

export default router
