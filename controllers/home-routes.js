const router = require('express').Router();
const { User, Category} = require('../models');

router.get('/categories', async (req, res) => {
    try {
      const userData = await Category.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
  
      // Serialize user data so templates can read it
      const users = userData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data into Handlebars.js template
      res.render('homepage', { users });
    } catch (err) {
      res.status(500).json(err);
    }
  });