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

router.get('/test', test );

router.put('/insert', insertProduct );
router.post('/:idProduct/edit', editAProduct );
router.get('/filtered', getProductsFiltered );
router.delete('/:idProduct/delete', deleteAProduct);
router.get('/:idProduct/select', selectAProduct);

module.exports = router