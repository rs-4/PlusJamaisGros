const User = require("../models/user.model");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { find } = require("../models/user.model");


   const validEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
   const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
   const validName = new RegExp(/^[a-zA-Z]+$/);


exports.register = (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 10);

  if(validEmail.test(req.body.email) == false){
    return res.status(400).send("Email invalide")
  }

  if(validPassword.test(req.body.password) == false){
    return res.status(400).send("Password invalide")
  }

  if(validName.test(req.body.lastName) == false){
    return res.status(400).send("Un nom ne peut pas contenir de symboles / chiffre")
  }
  if(validName.test(req.body.firstName) == false){
    return res.status(400).send("Un prenom ne peut pas contenir de symboles / chiffre")
  }
 

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email
  });


  newUser.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message:"user not found"
        })
      }
   
      if (user.password === req.body.user) {
        return res.status(401).send({
          message: "password not valid",
          auth: false
        })
      }
      User.findOne({email: req.body.email})
      .then(user => {
        if (!user) {
          return res.status(404).send({
          message: "user not found"
        })
      }
        res.send(user);
    })
    .catch(err => res.status(400).send(err)) 
    })
}