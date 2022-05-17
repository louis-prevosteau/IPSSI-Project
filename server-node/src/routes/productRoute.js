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

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage });

router.get('/test', test );

router.put('/insert', folderName("uploads").single("file"), insertProduct);
router.post('/:idProduct/edit', editAProduct );
router.get('/filtered', getProductsFiltered );
router.delete('/:idProduct/delete', deleteAProduct);
router.get('/:idProduct/select', selectAProduct);

module.exports = router