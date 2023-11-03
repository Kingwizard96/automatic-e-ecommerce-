const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post('/signup', async (req, res) => {
    try {
      const { email, username, password } = req.body; 
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = await User.create({
        email,
        username, 
        password: hashedPassword,
      });
  
      const token = jwt.sign({ userId: user.id }, 'secret', {
        expiresIn: '1h',
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
  
    if (user) {
      const passwordValid = await bcrypt.compare(req.body.password, user.password);
  
      if (passwordValid) {
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET);
  
        res.status(200).json({ token });
      } else {
        res.status(400).json({ error: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  });



module.exports = router;

