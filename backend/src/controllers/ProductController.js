const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {
    async read(request, response) {

        const products = await connection("products")
            .join("responsavel", "responsavel.idResponsavel", "=", "products.idResponsavel")
            .select([
                "responsavel.*",
                "products.nome",
                "products.valor",
                "products.desconto",
                "products.avaliacao",
                "products.quantidade"
            ]);

        return response.json(products);
    },

    async adminRead(request, response) {

        const products = await connection("products")
            .join("responsavel", "responsavel.idResponsavel", "=", "products.idResponsavel")
            .select([
                "responsavel.*",
                "products.nome",
                "products.valor",
                "products.desconto",
                "products.avaliacao",
                "products.quantidade"
            ]);

        return response.json(products);
    },

    async create(request, response) {
        const { nome, valor, desconto, avaliacao, quantidade } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");
        const idResponsavel = request.headers.authorization;

        await connection("products").insert({
            id,
            nome,
            valor,
            desconto,
            avaliacao,
            quantidade,
            idResponsavel
        });



        return response.json({ id });

    }


}