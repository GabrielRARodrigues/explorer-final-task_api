export const up = knex =>
  knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.fn.uuid())
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.text('password').notNullable()
    table
      .enum('role', ['admin', 'user'], {
        useNative: true,
        enumName: 'roles'
      })
      .notNullable()
      .default('user')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
  })

export const down = knex => knex.schema.dropTable('users')
