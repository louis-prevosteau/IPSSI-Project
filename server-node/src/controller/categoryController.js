
const CategoryModel = require("../models/categories");

exports.test = (req, res, next) => {
    res.json({
        msg: "product test",
    });
};

exports.insertCategory = (req, res, next) => {
    const categoryModel = new CategoryModel();
    categoryModel.name = req.body.name
    categoryModel.description = req.body.description

    categoryModel.save();
    res.status(200).send({ 
        categoryModel: categoryModel,
        message: "success" 
    })
};

exports.selectAllCategories = (req, res, next) => {
    CategoryModel
      .find()
      .then((model) => {
        res.json({
          model: model,
        });
      })
      .catch((err) => {
        res.send(err);
      });
};