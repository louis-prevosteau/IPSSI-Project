const productModel = require("../models/products"),
      userModel = require("../models/users");
const app = require("../../app");

const path = require('path')

exports.test = (req, res, next) => {
    res.json({
        msg: "product test",
    });
};

exports.insertProduct = (req, res, next) => {
    //if (user.accountType != "user") {
    const newProduct = new productModel();
    newProduct.name = req.body.name
    newProduct.description = req.body.description
    newProduct.price = req.body.price
    if (req.file) {
        newProduct.picture = req.file.path
    }
    newProduct.save();
    res.status(200).send({ 
        newProduct: newProduct,
        message: "success" 
    })
};

exports.selectAProduct = (req, res, next) => {
  const modelId = req.params.idProduct;

  productModel
    .findById(modelId)
    .then((model) => {
      res.json({
        model: model,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.editAProduct = (req, res) => {
  const modelId = req.params.idProduct;
  const newName = req.body.name;

  productModel
    .findById(modelId)
    .then((model) => {
      return Object.assign(model, { title: newName });
    })
    .then((model) => {
      return model.save();
    })
    .then((updatedModel) => {
      res.json({
        msg: "model updated",
        updatedModel,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteAProduct = (req, res, next) => {
    const modelId = req.params.idProduct;

    productModel
    .findByIdAndRemove(modelId)
    .then((model) => {
    res.json({
        msg: "Produit supprimé !",
        deleteModel,
        });      })
    .catch((err) => {
    res.send(err);
    });
};

exports.getProductsFiltered = (req, res, next) => {
  const filters = req.body.filters;
  const price = req.body.filters[0].price;
  const category = req.body.filters[0].category;

  productModel
    .find({
      filters: {
        $elemMatch: { $or: [{ category: category }, { price: price }] },
      },
    })
    .then((model) => {
      console.log(model.title);
      res.json({
        Message: "List products filtered successfully !",
        title: model,
      });
    });
};
