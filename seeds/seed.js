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

    await Category.bulkCreate(categoryData);
    
     await Item.bulkCreate(itemData);
    
    await Order.bulkCreate(orderData);
    
    await ShopCart.bulkCreate(shopCartData);
    
        process.exit(0);
    };

seedDatabase();