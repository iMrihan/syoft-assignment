const router = require('express').Router(); 
const {postProducts, getProducts, updateProducts} = require('./../controllers/productsController');
const { isAuthenticate, isAuthenticate2 } = require('./../controllers/authControllers');
router.get('/products',isAuthenticate2, getProducts );
router.post('/products', isAuthenticate, postProducts);
router.patch('/products', isAuthenticate2, updateProducts);

module.exports = router;