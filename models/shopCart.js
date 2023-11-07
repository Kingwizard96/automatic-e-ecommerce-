const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ShopCart extends Model {}

ShopCart.init(
        {
            // define columns
            // id column
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            // user_id column
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            // item_id column
            item_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'item',
                    key: 'id'
                }
            },
            // quantity column
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    isNumeric: true
                }
            },
            //  date added column
            date_added: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
          // save for later column
            save_for_later: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
        }, 

         {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'shopCart',
         }

);

module.exports = ShopCart;