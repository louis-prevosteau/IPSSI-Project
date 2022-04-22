const bcrypt = require('bcrypt');
const validator = require("email-validator");
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {type: String, required:true, trim: true, capitalize: true, minLength: 2, maxLength: 100},
    lastName: {type: String, required:true, trim: true, uppercase: true, minLength: 2 ,maxLength: 50},
    email: {type: String, required:true, trim: true, unique: true},
    password: {type: String, required:true, select: false},
    accountType: {type: String, required: false, default: "user"},
    picture: {
        data: Buffer,
        contentType: String
    },
    created_at: {type: Date, required: true, default: Date.now},
    updated_at: {type: Date},
    phoneNumber: {type: String, required: false, unique: true, minLength: 10, maxLength: 16},
    address: {type: String, required: true, unique: false, minLength: 10, maxLength: 200},
    country: {type: String, required: true, default: "France", minLength: 5, maxLength: 100},
    postalCode: {type: String, required: true, min: 5, max: 5},
    city: {type: String, required: true, minLength: 3, maxLength: 50},
    codeCountry: {type: String, required: true, default: "FR"},
    birthDay: {type: Date, required: false},
    creditCard: {type: String, required: false, min: 16, max: 20},
    resetPasswordLink: {
        data: String,
        default: ""
    }
}, {versionKey: false // You should be aware of the outcome after set to false
})

/*
  Méthode pour valider l'email
*/
UserSchema.methods.validateEmail = function(email) {
  return validator.validate(email);
}

/*
  Méthode pour valider et crypter le mot de passe
*/
UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5)
    const hash = await bcrypt.hash(password, salt)
    return hash;
};

UserSchema.methods.validPassword = async function(candidatePassword) {
    const result = bcrypt.compare(candidatePassword, this.password);
    return result;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;