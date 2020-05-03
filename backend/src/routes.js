const ProductController = require('./controllers/ProductController');
const ResponsavelController = require('./controllers/ResponsavelController');

const express = require('express')

const routes = express.Router();

routes.get('/products', ProductController.read);
routes.post('/products', ProductController.create);

routes.get('/admin/products', ProductController.adminRead);

routes.post('/responsavel', ResponsavelController.create);


module.exports = routes;