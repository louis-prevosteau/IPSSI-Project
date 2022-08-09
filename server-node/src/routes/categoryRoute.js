const express = require('express');

const router = express.Router();
const { 
    insertCategory,
    selectAllCategories
} = require('../controller/categoryController')

router.post('/insert', insertCategory);
router.get('/selectAll', selectAllCategories);


module.exports = router