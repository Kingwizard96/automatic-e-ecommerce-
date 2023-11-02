const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Categories extends Model {}

    Categories.init(
        {
          // define columns
          // id column
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        category_name:{
          type: DataTypes.STRING,
          allowNull: false
          }
        },
        
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'categories',
    }
);