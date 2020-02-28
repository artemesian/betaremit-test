const mongoose=require('mongoose');
const Product=require('../models/product')

const handleDel = (req, res) => {
  Product.deleteOne({_id:req.params.id})
  .then(()=>res.status(200).json({message:"delete"}))
  .catch((error)=>res.status(400).json({error}))
}
module.exports = handleDel
