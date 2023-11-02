const sequelize = require('../config/connection');
const { Categories, Items, Users } = require('../models');

const categoryData = require('./categoryData.json');
const itemData = require('./itemData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {  
    await sequelize.sync({ force: true });
   
    const categories = await Categories.bulkCreate(categoryData, {
        individualHooks: true,
        returning: true,
    });
    const items = await Items.bulkCreate(itemData, {
        individualHooks: true,
        returning: true,
    });
    const users = await Users.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    for (const item of itemData) {
        await Item.create({
            ...item,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        })
    }

    process.exit(0);
}

seedDatabase();