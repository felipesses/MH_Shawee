const express = require('express');

const ProductController = require('./controllers/ProductController');


const routes = express.Router();

routes.get('/products', ProductController.read);
routes.post('/products', ProductController.create);


module.exports = routes;