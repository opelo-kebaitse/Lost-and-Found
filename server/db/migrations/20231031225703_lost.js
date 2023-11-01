/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable('lost', (table) => {
    table.increments('id').primary()
    table.string('name')
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

export function down(knex) {
  return knex.schema.dropTable('lost')
}
