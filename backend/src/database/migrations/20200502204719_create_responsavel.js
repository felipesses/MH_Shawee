exports.up = function (knex) {
    return knex.schema.createTable("responsavel", function (table) {
        table.increments();
        table.string("idResponsavel").notNullable();
        table.string("nome").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("responsavel");
};