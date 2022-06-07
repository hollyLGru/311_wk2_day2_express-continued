const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get("/products", productsController.list);

// route to see all the products
router.get("/products/:id", productsController.show);
// route to see product by ID number
router.post("/products", productsController.create);
// post route for new products

module.exports = router; 