const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model {}

Items.init(
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'items',
    }
);

module.exports = Items;