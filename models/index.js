const Item = require('./item');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');
const  Post = require('./post');
const ShopCart = require('./shopCart');
// create associations

Post.hasOne(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
    });


User.hasMany(Order, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Order.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'User_id',
});

Post.hasOne(Item, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Item.belongsTo(Post, {
    foreignKey: 'post_id',
});

Item.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Category.hasMany(Item, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

User.hasMany(ShopCart, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

ShopCart.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { Item, Category, User, Order, Post, ShopCart};

