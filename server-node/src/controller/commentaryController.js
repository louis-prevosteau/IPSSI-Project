const CommentaryModel = require("../models/commentaries");

exports.test = (req, res, next) => {
    res.json({
        msg: "product test",
    });
};

exports.insertCommentaryToAProduct = (req, res, next) => {
    //if (user.accountType != "user") {
    const commentaryModel = new CommentaryModel();
    commentaryModel.title = req.body.title
    commentaryModel.content = req.body.content
    commentaryModel.grade = req.body.grade
    commentaryModel.userId = req.body.userId
    commentaryModel.productId = req.params.idProduct

    commentaryModel.save();
    res.status(200).send({ 
        commentaryModel: commentaryModel,
        message: "success" 
    })
};

exports.selectAllCommentariesFromAProduct = (req, res, next) => {
    let productId = req.params.productId
    
    console.log("productId: ", productId)

    CommentaryModel
    .find({ productId: productId })
    .then((model) => {
        res.json({
            model: model,
        });
    })
    .catch((err) => {
        res.send(err);
    });
};