const mongoose=require('mongoose');
const Product=require('../models/product')

const handleUpdate = (req, res) => {
	console.log(req.body)
   Product.updateOne({_id:req.body._id},{...req.body})
  .then(()=>res.status(200).json({message:"update"}))
  .catch((error)=>res.status(400).json({error}))
}
module.exports = handleUpdate
