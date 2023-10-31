/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('found').del()
  await knex('found').insert([
    {
      id: 1,
      species: 'Dog',
      photo: 'dog1.jpg',
      user_id: 123,
      user_name: 'John Doe',
      user_contact: 'john@example.com'
    },
    {
      id: 2,
      species: 'Cat',
      photo: 'cat1.jpg',
      user_id: 124,
      user_name: 'Alice Brown',
      user_contact: 'alice@example.com'
    },
    {
      id: 3,
      species: 'Hamster',
      photo: 'hamster1.jpg',
      user_id: 125,
      user_name: 'Eva Wilson',
      user_contact: 'eva@example.com'
    },
    {
      id: 4,
      species: 'Dog',
      photo: 'dog2.jpg',
      user_id: 126,
      user_name: 'Michael Johnson',
      user_contact: 'michael@example.com'
    },
    {
      id: 5,
      species: 'Cat',
      photo: 'cat2.jpg',
      user_id: 127,
      user_name: 'Emily White',
      user_contact: 'emily@example.com'
    },
    {
      id: 6,
      species: 'Hamster',
      photo: 'hamster2.jpg',
      user_id: 128,
      user_name: 'David Lee',
      user_contact: 'david@example.com'
    },
    {
      id: 7,
      species: 'Dog',
      photo: 'dog3.jpg',
      user_id: 129,
      user_name: 'Sophia Clark',
      user_contact: 'sophia@example.com'
    },
    {
      id: 8,
      species: 'Cat',
      photo: 'cat3.jpg',
      user_id: 130,
      user_name: 'Liam Baker',
      user_contact: 'liam@example.com'
    },
    {
      id: 9,
      species: 'Hamster',
      photo: 'hamster3.jpg',
      user_id: 131,
      user_name: 'Olivia Anderson',
      user_contact: 'olivia@example.com'
    },
    {
      id: 10,
      species: 'Dog',
      photo: 'dog4.jpg',
      user_id: 132,
      user_name: 'Emma Hall',
      user_contact: 'emma@example.com'
    }
  ]);
}
