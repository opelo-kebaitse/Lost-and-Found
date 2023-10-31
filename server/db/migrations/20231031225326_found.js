/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('found', (table)=> {
    table.integer('id').primary()
    table.string('species')
    table.string('photo')
    table.string('user_id')
    table.string('user_name')
    table.string('user_contact')

  })
  
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('found')
  
}
