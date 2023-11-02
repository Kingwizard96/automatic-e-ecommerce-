const {Item} = require('../models');

const itemData = [
    {
        product_name: 'Plain T-Shirt',
        price: 14.99,
        stock: 14,
        category_id: 1,
    },
    {
        product_name: 'playstation 5',
        price: 499.99,
        stock: 25,
        category_id: 2,
    },
    {
        product_name: 'dishwasher',
        price: 399.99,
        stock: 12,
        category_id: 3,
    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;