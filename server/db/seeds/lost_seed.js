/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('lost').del()
  await knex('lost').insert([
    {
      name: 'Fluffy',
      species: 'Cat',
      photo: 'fluffy.jpg',
      user_id: '1',
      user_name: 'John Doe',
      user_contact: 'john@example.com',
    },
    {
      name: 'Rover',
      species: 'Dog',
      photo: 'rover.jpg',
      user_id: '2',
      user_name: 'Jane Smith',
      user_contact: 'jane@example.com',
    },
    {
      name: 'Whiskers',
      species: 'Cat',
      photo: 'whiskers.jpg',
      user_id: '3',
      user_name: 'Alice Johnson',
      user_contact: 'alice@example.com',
    },
    {
      name: 'Buddy',
      species: 'Dog',
      photo: 'buddy.jpg',
      user_id: '4',
      user_name: 'Sarah Brown',
      user_contact: 'sarah@example.com',
    },
    {
      name: 'Luna',
      species: 'Cat',
      photo: 'luna.jpg',
      user_id: '5',
      user_name: 'Michael Wilson',
      user_contact: 'michael@example.com',
    },
    {
      name: 'Rocky',
      species: 'Turtle',
      photo: 'rocky.jpg',
      user_id: '6',
      user_name: 'Emily Davis',
      user_contact: 'emily@example.com',
    },
    {
      name: 'Oliver',
      species: 'Rabbit',
      photo: 'oliver.jpg',
      user_id: '7',
      user_name: 'William Lee',
      user_contact: 'william@example.com',
    },
  ])
}
