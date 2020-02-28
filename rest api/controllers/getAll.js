const mongoose=require('mongoose');
const Product=require('../models/product')

const getAll = (req, res, io) => {
	console.log("GETALL")
   Product.find()
  .then((products)=>res.status(200).json(products))
  .catch((error)=>res.status(400).json({error}))
}
module.exports = getAll
