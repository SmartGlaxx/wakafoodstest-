const mongoose = require('mongoose')
const {CategorySchemaData, SubCategorySchemaData, MenuSchemaData} = require('../models/models')

// const path = require('path')
// const cloudinary = require('cloudinary').v2
// const fs = require('fs')

const getCategory = async(req, res)=>{
	const kitchenId = req.params.kitchenId
	CategorySchemaData.find({kitchen_id:kitchenId})
	.exec()
   .then(results => {
   res.status(200).json({results})
   }).catch(error =>console.log(error))
}


// const uploadCategoryImage = async(req, res)=>{
// 	// const imageFile = req.files.image
// 	// const imagePath = path.join(__dirname, "../public/uploads/" + imageFile.name)
// 	// const response = await imageFile.mv(imagePath)
// 	// res.status(200).json({
// 	// 	image : {src : `/uploads/${imageFile.name}`}
// 	// })

// 	const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
// 		use_filename : true,
// 		folder : "wakafoods_uploads"
// 	})
// 	fs.unlinkSync(req.files.image.tempFilePath)
// 	//result.secure_url
// 	res.status(200).json({secure_url: result})
// }
const createCategory = async(req, res)=>{

	const response = new CategorySchemaData({
	_id : mongoose.Types.ObjectId(),
	image : req.body.image,
	kitchen_id : req.body.kitchen_id,
	name : req.body.name,
	step1food: req.body.step1food,
	step1name: req.body.step1name,
	step2food: req.body.step2food,
	step2name: req.body.step2name,
	step3food: req.body.step3food,
	step3name: req.body.step3name,
	step4food: req.body.step4food,
	step4name: req.body.step4name,
	})
	await res.status(200).json({message : response})
	await response.save()
}

const updateCategory = (req, res)=>{
	const kitchenId = req.params.id
	CategorySchemaData.findByIdAndUpdate({_id : kitchenId}, req.body)
	.then(response =>{
		res.status(200).json({
			message : "Item updated"
		})
	})
}

const createSubCategory = async(req, res)=>{

	const response = new SubCategorySchemaData({
	_id : mongoose.Types.ObjectId(),
	image : req.body.image,
	name : req.body.name,
	category : req.body.category 
	})
	await res.status(200).json({message : response})
	await response.save()
}

const createMenu = async(req, res)=>{

	const response = new MenuSchemaData({
	_id : mongoose.Types.ObjectId(),
	image : req.body.image,
	name : req.body.name,
	category : req.body.category,
	subCategory : req.body.subcategory,
	})
	await res.status(200).json({message : response})
	await response.save()
}



module.exports = {getCategory, createCategory, updateCategory, createSubCategory, createMenu}

