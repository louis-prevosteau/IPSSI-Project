const express = require('express');

const router = express.Router();
const { 
    test,
    insertProduct,
    editAProduct,
    getProductsFiltered,
    deleteAProduct,
    selectAProduct, 
    selectAllProducts
} = require('../controller/productController')
const folderName = require('../middleware/multer')

router.get('/test', test );
router.get('/selectAll', selectAllProducts)
router.get('/:idProduct/select', selectAProduct);
router.put('/insert', folderName(__dirname + "/../../uploads").single("file"), insertProduct);
router.put('/:idProduct/edit', folderName(__dirname + "/../../uploads").single("file"), editAProduct );
router.get('/filtered', getProductsFiltered );
router.delete('/:idProduct/delete', deleteAProduct);


module.exports = router