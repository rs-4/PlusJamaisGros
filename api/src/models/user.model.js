const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    length: 50,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  lundi: {
    type: String,
    required: true,
    default: 0
  }, 
   mardi: {
    type: String,
    required: true,
    default: 0
  },  
  mercredi:  {
    type: String,
    required: true,
    default: 0
  },  
  jeudi: {
    type: String,
    required: true,
    default: 0
  },  
  vendredi: {
    type: String,
    required: true,
    default: 0
  },  
  samedi: {
    type: String,
    required: true,
    default: 0
  },  dimanche:
   {
    type: String, 
    required: true,
    default: 0
  },session:
  {
   type: Number, 
   required: true,
   default: 0
 },
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema);