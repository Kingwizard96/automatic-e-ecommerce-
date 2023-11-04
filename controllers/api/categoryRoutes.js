const router = require('express').Router();
const { Category, Item } = require('../../models');

router.get('/', async (req, res) => {
    // find all categories  
    // be sure to include its associated Products
    try{
        const categoryData = await Category.findAll({
            include: [{model: Item}]
        });
        res.status(200).json(categoryData);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one category by it's id value
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{model: Item}]
        });
        if (!categoryData){
            res.status(404).json({message: 'No category found with that id!'});
            return;
        }
        res.status(200).json(categoryData);
    } catch (err){
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No  found with that id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;