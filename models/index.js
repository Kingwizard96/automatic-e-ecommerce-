const Item = require('./item');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');
const  Post = require('./post');

// create associations
Item.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Item, {
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

module.exports = { Item, Category, User, Order, Post};

