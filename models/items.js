const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'item',
    }
);