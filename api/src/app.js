const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const apiRouter = require('./routes');

app.use(bodyParser.json())

mongoose.connect(
  `mongodb://localhost:27017/apiNFA`, 
).then(() => {
  console.log("successfully connect to database")
}).catch(err=>console.log(err))

app.use("/api/v1", apiRouter)

//Méthod launch app
app.listen(process.env.PORT, function () {
  console.log("Server launch");
}); 