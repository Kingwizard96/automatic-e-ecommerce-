const router = require('express').Router();
const { Post, User} = require('../../models');

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll();
      res.status(200).json(postData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
      const postId = req.params.id;
  
      const postData = await Post.findByPk(postId);
  
      if (!postData) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  
 router.get('/:id/user', async (req, res) => {
    try {
      const postId = req.params.id;
  
      const postData = await Post.findByPk(postId, {
        include: [{ model: User }],
      });
  
      if (!postData) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      const user = postData.User;
  
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }); 

module.exports = router;
