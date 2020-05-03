
const connection = require("../database/connection");

const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { nome } = request.body;

        const idResponsavel = crypto.randomBytes(4).toString("HEX");

        await connection("responsavel").insert({
            idResponsavel,
            nome,
        });

        return response.json({ idResponsavel });

    }
}