const 
    jwt = require('jsonwebtoken'),
    userModel = require("../models/users"),
    { capitalize } = require('../helpers')
    require("dotenv").config();

// register controller
exports.register = async (req, res, next) => {
    try {

        const existingUser = await userModel.findOne({ email: req.body.email })

        if (existingUser) {
            const error = new Error("Email is already in used!")
            error.statusCode = 403;
            throw error;
        }
        
        let user = await new userModel();
        user.firstName = capitalize(req.body.firstName);
        user.lastName = req.body.lastName.toUpperCase();
        user.email = req.body.email
        user.password = await user.encryptPassword(req.body.password)
        user.phoneNumber = req.body.phoneNumber // TODO: S'assurer que c'est une numéron de téléphone valable
        user.city = req.body.city
        user.postalCode = req.body.postalCode
        user.address = req.body.address

        if (req.body.country && req.body.country !== "") {
            user.country = capitalize(req.body.country)
            let tempStr = req.body.country.substring(0, 2)
            user.codeCountry = tempStr.toUpperCase();
        }

        // if((req.body.phoneNumber).length < 16 && (req.body.phoneNumber).length > 12) {
        //     user.phoneNumber = req.body.phoneNumber
        // }
        //user.phoneNumber = req.body.phoneNumber
        /*
        if (req.body.picture && req.body.picture !== "") {
            user.picture = req.body.picture
        }
        if (req.body.birthDay && req.body.birthDay !== "") {
            user.birthDay = req.body.birthDay
        }
        user.creditCard = req.body.creditCard
        */

        user = await user.save();

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY)
        return res.send({ user, token })

    } catch (err) {
        console.log(err);
        next(err)
    }
}