const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const results = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });
    res.json(results);
    
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const results = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product
      }]
    });
    res.json(results);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const results = await Category.create(req.body);
    res.json(results);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const results = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(results);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const results = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(results);

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
