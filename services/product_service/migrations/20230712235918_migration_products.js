exports.up = function (knex) {
  return knex.schema
    .createTable('products', function (table) {
      table.increments('id');
      table.string('name', 255).notNullable();
      table.string('description', 255).nullable();
      table.string('image').notNullable();
      table.dateTime('created_at').nullable();
      table.dateTime('updated_at').nullable();
    })
    .createTable('tags', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.integer('product_id').notNullable();
      table.foreign('product_id').references('id').inTable('products');
    });
}

exports.down = function(knex){
  return knex.schema
    .alterTable('tags', function (table) {
      table.dropForeign('product_id');
    })
    .dropTable('tags')
    .dropTable('products');
}

exports.config = { transaction: false };