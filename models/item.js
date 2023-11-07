const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
     // define columns
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull : false
      }, 
      item_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true
        }
      },

      discounted_price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 1.00,
        validate: {
          isDecimal: true
        }
      },

      category_id:{
        type: DataTypes.INTEGER,
        references: {
          modelName: 'category',
          key: 'id'
        }
      },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'item',
    }
);

module.exports = Item;