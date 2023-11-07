import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFoundAnimal } from '../apis/animals.ts'
import { NewFoundAnimal } from '../../models/animals.ts'
import { useAuth0 } from '@auth0/auth0-react'

const AddFoundAnimalForm = () => {

  const {getAccessTokenSilently} = useAuth0() // Destructure getAccessTokenSilently

  const [formData, setFormData] = useState<NewFoundAnimal>({
    species: '',
    photo: '',
    user_id: '',
    user_name: '',
    user_contact: '',
  })

  const queryClient = useQueryClient()

  const mutation = useMutation(addFoundAnimal, {
    onSuccess: () => {
      // Invalidate the query to refetch the updated found animals list
      queryClient.invalidateQueries(['foundAnimals'])
      // Reset the form data after successful submission
      setFormData({
        species: '',
        photo: '',
        user_id: '',
        user_name: '',
        user_contact: '',
      })
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = await getAccessTokenSilently() // use getAccessTokenSilently to get an access token
    mutation.mutate({formData, token})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="form-container">
      <h2>Add Found Animal</h2>
      <form onSubmit={handleSubmit} className="animal-form">
        <div className="form-group">
          <label htmlFor="species">Animal Species:</label>
          <input
            type="text"
            id="species"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Animal Photo URL:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_id">User ID:</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_name">User Name:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_contact">User Contact:</label>
          <input
            type="text"
            id="user_contact"
            name="user_contact"
            value={formData.user_contact}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={mutation.isLoading}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddFoundAnimalForm
