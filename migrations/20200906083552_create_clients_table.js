
exports.up = function(knex) {
    return knex.schema
        .createTable('clients', function (table) {
            table.string('uuid').primary();
            table.string('name', 255).notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};
