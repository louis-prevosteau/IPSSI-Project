const 
    jwt = require('jsonwebtoken'),
    userModel = require("../models/users"),
    validationHandler = require("../validations/validationHandler"),
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

// login controller
exports.login = async (req, res, next) => {
    try {
        validationHandler(req);

        const email = req.body.email
        const password = req.body.password

        const user = await userModel.findOne({ email }).select("+password")
        if (!user) {
            const error = new Error("Wrong Email")
            error.statusCode = 401;
            throw error;
        }

        const validPassword = await user.validPassword(password)
        if (!validPassword) {
            const error = new Error("Wrong Password")
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY)
        res.cookie("tok", token, { expire: new Date() + 99999 })

        return res.send({ user, token })
    } catch (err) {
        next(err)
    }
}

// login controller
exports.updateProfile = async (req, res, next) => {
    try {
        //validationHeader(req)
        console.log("updateProfile:" + req.headers.authorization)
        /*
        validationHandler(req);

        const user = await userModel.findOne({ email })
        if (!user) {
            const error = new Error("Wrong token")
            error.statusCode = 401;
            throw error;
        }

        return res.send({ user })
        */
       return res.send({ test: "test" })
    } catch (err) {
        next(err)
    }
}

