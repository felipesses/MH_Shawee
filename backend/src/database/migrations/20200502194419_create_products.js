exports.up = function (knex) {
    return knex.schema.createTable("products", function (table) {
        table.string("id").primary();
        table.string("nome").notNullable();
        table.string("valor").notNullable();
        table.string("desconto").notNullable();
        table.string("avaliacao").notNullable();

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("products");
};