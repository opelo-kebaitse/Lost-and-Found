import express from 'express'

import * as db from '../db/animals.ts'

const router = express.Router()

// route to get lost animals

router.get('/', async (req, res) => {
  try {
    // const lostAnimals = await connection('lost').select('*')
    const animals = await db.getLostAnimals()
    res.json({ animals })
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})

export default router
