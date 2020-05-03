exports.up = function (knex) {
    return knex.schema.createTable("products", function (table) {
        table.string("id").primary();
        table.string("nome").notNullable();
        table.decimal("valor").notNullable();
        table.decimal("desconto").nullable();
        table.decimal("avaliacao").nullable();
        table.decimal("quantidade").notNullable();
        table.string("idResponsavel").notNullable();

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("products");
};