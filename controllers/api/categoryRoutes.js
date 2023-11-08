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

router.get('/:categoryId/items', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    // Find the category by ID and include associated items
    const categoryData = await Category.findByPk(categoryId, {
      include: [{ model: Item }],
    });

    if (!categoryData) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Access the associated items from categoryData
    const items = categoryData.Items;

    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// router.delete('/:id', async (req, res) => {
//     // delete a category by its `id` value
//     try {
//       const categoryData = await Category.destroy({
//         where: {
//           id: req.params.id,
//         },
//       });
  
//       if (!categoryData) {
//         res.status(404).json({ message: 'No  found with that id!' });
//         return;
//       }
  
//       res.status(200).json(categoryData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
  
  module.exports = router;