const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const validator = require('validator');

dotenv.config();

router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
  const userData = await User.create(req.body);
  
  const validEmail = validator.isEmail(req.body.email);

  if (validEmail) {
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    }); 
  } 
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(400).json({message: 'couldnt find a user with that email or password'});
      return;
    }
    const validPassowrd = await userData.checkPassword(req.body.password);
    
    if(!validPassowrd) {
      res.status(400).json({mesage: 'couldnt find a user with that email or password'});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!'});
    });
  
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    req.status(404).end();
  }
});


module.exports = router;




























module.exports = router;



// router.post('/signup', async (req, res) => {
//     try {
//       const { email, username, password } = req.body; 
  
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
      
      

//       const user = await User.create({
//         email,
//         username, 
//         password: hashedPassword,
//       });
  
//       const token = jwt.sign({ userId: user.id }, 'secret', {
//         expiresIn: '1h',
//       });
  
//       res.json({ token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });

//   router.post('/login', async (req, res) => {
//     const user = await User.findOne({ where: { email: req.body.email } });
  
//     if (user) {
//       const passwordValid = await bcrypt.compare(req.body.password, user.password);
  
//       if (passwordValid) {
//         const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET);
  
//         res.status(200).json({ token });
//       } else {
//         res.status(400).json({ error: "Password Incorrect" });
//       }
//     } else {
//       res.status(404).json({ error: "User does not exist" });
//     }
//   });




