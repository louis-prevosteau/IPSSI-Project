const productModel = require("../models/products");
const commandModel = require("../models/commands");
const CategoryModel = require("../models/categories");
const UserModel = require("../models/users");
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

exports.insertProduct = async (req, res, next) => {
    const newProduct = new productModel();
    newProduct.name = req.body.name
    newProduct.description = req.body.description
    newProduct.price = req.body.price

    const id_category = req.body.id_category;

    if (id_category.length != 24) {
      res.status(400).send({ 
        message: "category not found" 
      })
      return
    }
    const categoryModel = await CategoryModel.findById(id_category)

    if (categoryModel != null) {
      newProduct.id_category = id_category
    } else {
      res.status(400).send({ 
        message: "category not found" 
      })
      return
    }
    
    if (req.file) {
        newProduct.picture = req.file.path
    } else {
        newProduct.picture = ""
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

/**
 * Commands requests
 */
exports.insertCommand = async (req, res, next) => {
  const newCommand = new commandModel();
  
  newCommand.amount = req.body.amount

  let user_id = req.body.userId
  if (user_id.length != 24) {
    res.status(400).send({ 
      message: "user not found" 
    })
    return
  }
  const userModel = await UserModel.findById(user_id)

  if (userModel != null) {
      newCommand.userId = req.body.userId
  } else {
      res.status(400).send({ 
        message: "user not found" 
      })
      return
  }
  newCommand.save();
  res.status(200).send({ 
      newCommand: newCommand,
      message: "success" 
  })
};

exports.selectACommand = (req, res, next) => {
  const idCommand = req.params.idCommand;

  commandModel
    .findById(idCommand)
    .then((command) => {
      res.status(200).send({ 
        command: command,
        message: "success" 
      })
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.selectAllCommands = (req, res) => {
  commandModel
    .find()
    .then((commands) => {
      res.status(200).send({ 
        listOfCommands: commands,
        message: "success" 
      })
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.editACommand = (req, res) => {
    const idCommand = req.params.idCommand;

    commandModel
    .findById(idCommand)
    .then((command) => {
        return Object.assign(command, { state: req.body.state, amount: req.body.amount });
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