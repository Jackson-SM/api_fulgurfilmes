import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
        .unique()
        .defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('email').notNullable().unique()
      table.string('name').notNullable()
      table.string('password').notNullable()
      table.integer('level').defaultTo(1).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
