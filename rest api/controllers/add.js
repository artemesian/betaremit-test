const mongoose=require('mongoose');
const Product=require('../models/product')

const handleAdd = (req, res) => {
	let product = new Product({...req.body})
   product.save()
  .then(()=>res.redirect('/'))
  .catch((error)=>res.status(400).json({error}))
}
module.exports = handleAdd