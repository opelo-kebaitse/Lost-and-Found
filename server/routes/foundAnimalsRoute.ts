import express from 'express'

import * as db from '../db/animals.ts'

const router = express.Router()

// route to get found animals

router.get('/', async (req, res) => {
  try {
    const foundAnimals = await db.getFoundAnimals()
    res.json({ foundAnimals})
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})

//route to get contact details 
// api/v1/found/:id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const contact = await db.getContactDetails(id)
    res.json(contact)
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})
export default router

