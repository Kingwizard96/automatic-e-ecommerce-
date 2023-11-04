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
    },
    {
        product_name: 'toilet paper',
        price: 5.99,
        stock: 100,
        category_id: 4,
    },
    {
        product_name: 'couch',
        price: 599.99,
        stock: 2,
        category_id: 5,
    },
    {
        product_name: 'legos',
        price: 59.99,
        stock: 5,
        category_id: 6,
    },
    {
        product_name: 'shampoo',
        price: 9.99,
        stock: 20,
        category_id: 7,
    },
    {
        product_name: '2009 honda civic',
        price: 9999.99,
        stock: 1,
        category_id: 9,
    },
    {
        product_name: 'siberian-husky',
        price: 299.99,
        stock: 1,
        category_id: 10,    
    },
    {
        product_name: 'dress',
        price: 59.99,
        stock: 10,
        category_id: 1,
        discount:0.50,
    },
    {
        product_name: 'xbox series x',
        price: 499.99,
        stock: 15,
        category_id: 2,
    },
    {
        product_name: 'kurig',
        price: 99.99,
        stock: 20,
        category_id: 3,

    }
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;