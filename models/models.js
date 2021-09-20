const mongoose = require('mongoose')

const CategorySchema  = new mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	image : String,
	kitchen_id : String,
	name : String,
	step1food: String,
	step1name: String,
	step2food: String,
	step2name: String,
	step3food: String,
	step3name: String,
	step4food: String,
	step4name: String,
}) 


const SubCategorySchema = mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	image : String,
	kitchen_id : String,
	name : String,
})


const MenuSchema = mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	image : String,
	category : String,
	subCategory : String,
	name : String,
})


const CategorySchemaData = mongoose.model('Category', CategorySchema)
const SubCategorySchemaData = mongoose.model('subCategory', SubCategorySchema)
const MenuSchemaData = mongoose.model('Menu', MenuSchema)


module.exports = {CategorySchemaData, SubCategorySchemaData, MenuSchemaData}