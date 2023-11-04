const Item = require('./item');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');

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



