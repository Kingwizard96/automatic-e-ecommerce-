const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // 
        // total column
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
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
        // order_number column
        order_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        // shipping_address column
        // shipping_address: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // Commented out temporarily for testing purposes
        // order_date column
        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        // user_id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'order',
    }
);

module.exports = Order;