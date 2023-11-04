import express from 'express'

import * as db from '../db/animals.ts'
import { NewLostAnimal } from '../../models/animals.ts'

const router = express.Router()

// route to get lost animals

router.get('/', async (req, res) => {
  try {
    const lostAnimals = await db.getLostAnimals()
    res.json({ lostAnimals })
  } catch (error) {
    res.status(500).json('Internal Server Error')
  }
})

// Route to post lost animal
router.post('/', async (req, res) => {
  const { newLostAnimal } = req.body as { newLostAnimal: NewLostAnimal };

  if (!newLostAnimal) {
    console.error('No data provided');
    return res.status(400).json({ error: 'Bad request' });
  }

  try {
    await db.addLostAnimal(newLostAnimal);
    res.status(201).json({ lostAnimal: newLostAnimal });
  } catch (error) {
    console.error('Error adding lost animal:', error);
    res.status(500).json({ error: 'Failed to add lost animal' });
  }
});


export default router;
