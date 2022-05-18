const productModel = require("../models/products"),
      userModel = require("../models/users");
const app = require("../../app");

const path = require('path')

const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

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

exports.selectAllProducts = (req, res) => {
  productModel
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

exports.editAProduct = (req, res) => {
    const modelId = req.params.idProduct;
    const productName = req.body.name;
    const productDescription = req.body.description
    const productPrice = req.body.price

    console.log(req.body)
    productModel
    .findById(modelId)
    .then((model) => {
        if (req.file) {
            unlinkAsync(model.picture)
            return Object.assign(model, { name: productName, description: productDescription, productPrice: productPrice, picture: req.file.path });
        }
        return Object.assign(model, { name: productName, description: productDescription, productPrice: productPrice  });
    })
    .then((model) => {
        return model.save();
    })
    .then((updatedModel) => {
        res.status(200).send({ 
            updatedModel: updatedModel,
            message: "success" 
        })
    })
    .catch((err) => {
        res.send(err);
    });
};

exports.deleteAProduct = (req, res, next) => {
    const modelId = req.params.idProduct;

    productModel.findByIdAndDelete(modelId)
    .then((model) => {
		unlinkAsync(model.picture)
		res.json({
			msg: "Produit supprimé !",
			deleteModel: model,
			});      
		})
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
