const express = require('express');
const { getProducts, getProductById, addProduct, deleteProduct } = require('../controllers/productController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, admin, addProduct); // Only admin can add products

router.route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct); // Only admin can delete products

  module.exports= router;
