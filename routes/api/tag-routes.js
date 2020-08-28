const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const results = await Tag.findAll({
      include: [
        {
          model: Product
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
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const results = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product
        }
      ]
    });
    res.json(results);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const results = await Tag.create(req.body);
    res.json(results);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const results = await Tag.update(req.body, {
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
  // delete on tag by its `id` value
  try{
    const results = await Tag.destroy({
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
