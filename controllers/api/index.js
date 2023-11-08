const router = require('express').Router();
// const apiRoutes = require('./api');
const categoryRoutes = require('./categoryRoutes');
// const itemRoutes = require('./item-routes');
const userRoutes = require('./userRoutes');
// const shopCartRoutes = require('./shopCart-routes');
// const checkoutRoutes = require('./checkout-routes');


// router.use('/api', apiRoutes);
router.use('/category', categoryRoutes);
// router.use('/item', itemRoutes);
router.use('/user', userRoutes);
// router.use('/shopCart', shopCartRoutes);
// router.use('/checkout', checkoutRoutes);

module.exports = router;