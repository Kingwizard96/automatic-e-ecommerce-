const router = require('express').Router();
const { User, Category} = require('../models');

// router.get('/categories', async (req, res) => {
//     try {
//       const userData = await Category.findAll({
//         attributes: { exclude: ['password'] },
//         order: [['name', 'ASC']],
//       });
  
//       // Serialize user data so templates can read it
//       const users = userData.map((project) => project.get({ plain: true }));
  
//       // Pass serialized data into Handlebars.js template
//       res.render('homepage', { users });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get('/', (req, res) => {res.render('home')});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
  } 
  res.render('login')
});

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;