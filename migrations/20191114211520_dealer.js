exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments('id');
        table.integer('vin').unique().notNullable();
        table.integer('milage').notNullable();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.string('transmission');
        table.string('title');
        table.timestamps(true, true);
      })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
