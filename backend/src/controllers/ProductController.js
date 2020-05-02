const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {
    async read(request, response) {
        const products = await connection("products").select("*");

        return response.json(products);
    },

    async create(request, response) {
        const { nome, valor, desconto, avaliacao } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");

        await connection("products").insert({
            id,
            nome,
            valor,
            desconto,
            avaliacao
        });

        return response.json({ id });

    }


}