import express from 'express'
import checkJwt, { JwtRequest} from '../auth0.ts'
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

// route to post lost animal

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const { formData } = req.body as { formData: NewLostAnimal };

  if (!formData) {
    console.error('No data provided');
    return res.status(400).json({ error: 'Bad request' });
  }

  try {
    await db.addLostAnimal(formData);
    res.status(201).json({ newLostAnimal: formData});
  } catch (error) {
    console.error('Error adding lost animal:', error);
    res.status(500).json({ error: 'Failed to add lost animal' });
  }
});


export default router;
