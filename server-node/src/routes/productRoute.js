const express = require('express');

const router = express.Router();
const { 
    test,
    insertProduct,
    editAProduct,
    getProductsFiltered,
    deleteAProduct,
    selectAProduct 
} = require('../controller/productController')
const folderName = require('../middleware/multer')

router.get('/test', test );

router.get('/:idProduct/select', selectAProduct);
router.put('/insert', folderName(__dirname + "/../../uploads").single("file"), insertProduct);
router.post('/:idProduct/edit', editAProduct );
router.get('/filtered', getProductsFiltered );
router.delete('/:idProduct/delete', deleteAProduct);


module.exports = router