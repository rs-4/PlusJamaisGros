const { reset } = require("nodemon");
const verifyToken = require("../middlewares/verifyToken");
const User = require("../models/user.model");
var nodemailer = require('nodemailer');
const { use } = require("../routes/auth.route");

exports.getUser = (req, res) => {
  User.findById(req.userToken.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
        message: "user not found"
      })
    }
      res.send(user);
  })
  .catch(err => res.status(400).send(err)) 
}

exports.updateUser = (req, res) => {
  User.findOneAndUpdate({email:req.body.email},req.body)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "user not found"
        })
      }
      User.findOne({email:user.email}).then(userupdated => {
        res.send(userupdated);
      })
    })
    .catch(err => res.status(400).send(err))
}

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    res.send(user)
  }).catch(err=>res.status(400).send(err))
}

exports.getUsers = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err));
}

exports.updateUserWishlist = (req, res) => {
  User.findById(req.userToken.id).then(user => {
    const { wishlist } = user;
    if (wishlist.includes(req.body.productId)) {
      return res.send({
        message:"product already in you wishlist"
      })
    }
    user.wishlist.push(req.body.productId);
    user.save().then(userUpdate => {
      User.findById(req.userToken.id).populate('wishlist')
        .then(user => res.send(user))
          .catch(err => res.status(404).send(err))
    })
  })
}
   exports.passwordEmail = (req, res) => {
   
  User.findOne({email:req.body.email})
  .then(userfind => {
  console.log(req.body.email)

const transporter = nodemailer.createTransport({
  service: 'gmail',
     auth: {
          user: 'plusjamaisfat@gmail.com',
          pass: 'ytzfeumsictdfbwy',
       },
  secure: true,
  });
  const mailData = {
    from: 'plusjamaisfat@gmail.com',
      to: userfind.email,
      subject: 'Forgot password 😡',
      html: `<b>Hey ${userfind.firstName}👌</b>
             <br> Ton mdp : ${userfind.password}<br/>`,
    }
    transporter.sendMail(mailData, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Verif email sent");
      }
    });
    console.log(mailData,transporter)
    console.log(userfind.email)
    res.status(200).send()
})
.catch(err => res.status(400).send(err)) 
}

