const router = require('express').Router();
const { User, Category, Item} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const userData = await Category.findAll({
        // include: [
        //   {
        //     model: User,
        //     attributes: ['name'],
        //   },
        // ],
        // Commented out because category and user have no associations
      });
  
      // Serialize user data so templates can read it
      const users = userData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data into Handlebars.js template
      res.render('home', { users });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //localhost:3001/login
router.get('/login', (req, res) => {
  // Add a conditional statement to check if the user is logged in (if (req.session.loggedIn))
    res.render('login');
  });

router.get('/signup', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/dashboard', async (req, res) => {
    try{
      const itemData = await Item.findAll({
        include: [
          {
            model: Category,
            attributes: ['name'],
          },
        ],
      });
    }

    catch (err) {
      res.status(500).json(err);
    }
    
  });

  router.get('/all-posts', async (req,res) => {
    // in this case we would have a try/catch block to pull the posts from the db
    res.render('all-posts');
  });

  module.exports = router;
  
