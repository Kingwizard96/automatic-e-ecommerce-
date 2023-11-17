const router = require('express').Router();
// const apiRoutes = require('./api');
const categoryRoutes = require('./category-routes');
// const itemRoutes = require('./item-routes');
const userRoutes = require('./user-routes');
// const shopCartRoutes = require('./shopCart-routes');
// const checkoutRoutes = require('./checkout-routes');


// router.use('/api', apiRoutes);
router.use('/category', categoryRoutes);
// router.use('/item', itemRoutes);
router.use('/users', userRoutes);
// router.use('/shopCart', shopCartRoutes);

// router.use('/checkout', checkoutRoutes);

module.exports = router;