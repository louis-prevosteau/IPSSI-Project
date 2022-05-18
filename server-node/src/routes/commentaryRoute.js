const express = require('express');

const router = express.Router();
const { 
    insertCommentaryToAProduct,
    selectAllCommentariesFromAProduct
} = require('../controller/commentaryController')

router.post('/:productId/insert', insertCommentaryToAProduct );
router.get('/:productId/selectAll', selectAllCommentariesFromAProduct);


module.exports = router