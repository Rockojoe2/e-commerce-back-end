const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Get method for all categories
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  }
  catch (err){
    res.status(500).json(err);

  }
  // find all categories
  // be sure to include its associated Products
});

//Get method for category by id query
router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{ model: Product}]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  }
  catch(err){
    res.status(500).json(err);
      }
  // find one category by its `id` value
  // be sure to include its associated Products
});

//Post method to create a category
router.post('/', async (req, res) => {
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  }
  catch (err){
    res.status(400).json(err);
  }
});

 // update a category by its id query
router.put('/:id', async (req, res) => {
 
  try{
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  }
  catch (err){
    res.status(400).json(err);
  }
});

 // delete a category by its id query
router.delete('/:id', async (req, res) => {
 
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (err){
    res.status(400).json(err);
  }
});

module.exports = router;
