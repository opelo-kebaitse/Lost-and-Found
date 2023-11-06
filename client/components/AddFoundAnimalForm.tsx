import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFoundAnimal } from '../apis/animals.ts';
import { NewFoundAnimal } from '../../models/animals.ts';

const AddFoundAnimalForm = () => {
  const [formData, setFormData] = useState<NewFoundAnimal>({
    species: '',
    photo: '',
    user_id: '',
    user_name: '',
    user_contact: '',
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(addFoundAnimal, {
    onSuccess: () => {
      // Invalidate the query to refetch the updated found animals list
      queryClient.invalidateQueries(['foundAnimals']);
      // Reset the form data after successful submission
      setFormData({
        species: '',
        photo: '',
        user_id: '',
        user_name: '',
        user_contact: '',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Add Found Animal</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="species">Animal Species:</label>
        <input
          type="text"
          id="species"
          name="species"
          value={formData.species}
          onChange={handleChange}
          required
        />

        <label htmlFor="photo">Animal Photo URL:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          required
        />

        <label htmlFor="user_id">User ID:</label>
        <input
          type="text"
          id="user_id"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          required
        />

        <label htmlFor="user_name">User Name:</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="user_contact">User Contact:</label>
        <input
          type="text"
          id="user_contact"
          name="user_contact"
          value={formData.user_contact}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={mutation.isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFoundAnimalForm
