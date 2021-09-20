const router = require('express').Router()
const  {getCategory, createCategory, updateCategory, deleteCategory,
 createSubCategory, createMenu} = require('../controllers/uploadContollers')

router.get('/category/list/:kitchenId',getCategory)

router.post('/category/new', createCategory)
router.put('/category/:id',updateCategory)
router.delete('/category/:id',deleteCategory)

router.post('/subcategory/new', createSubCategory)

router.post('/menu/new', createMenu)



module.exports = router


