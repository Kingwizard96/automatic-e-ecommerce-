const sequelize = require('../config/connection');
const { User, Item, Category, Order, ShopCart} = require('../models');

const userData = require('./userData.json');
const itemData = require('./itemData.json');
const categoryData = require('./category-seeds.json');
const orderData = require('./orderData.json');
const shopCartData = require('./shopCartData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    const items = await Item.bulkCreate(itemData);
    
    const categories = await Category.bulkCreate(categoryData);
    
    const orders = await Order.bulkCreate(orderData);
    
    const shopCarts = await ShopCart.bulkCreate(shopCartData);
    
        process.exit(0);
    };

seedDatabase();