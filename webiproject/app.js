const express = require("express");
require("dotenv").config();
const app = express();

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
let verifyToken = require("./middleware/authentication ");

const formidable = require("express-formidable");
const register = require("./model/register");
const product = require("./product/product");
require("./database/conn");

const port = process.env.PORT;

//registration
app.post("/", formidable(), async function (req, res) {
  const { firstName, lastName, email, phoneNumber, password } = req.fields;

  if (!(firstName && lastName && email && phoneNumber && password)) {
    res.status(400).send("provide the all fields");
  } else {
    let enc_password = await bcrypt.hash(req.fields.password, 10);
    const user = await register.create({
      firstName: req.fields.firstName,
      lastName: req.fields.lastName,
      email: req.fields.email,
      phoneNumber: req.fields.phoneNumber,
      password: enc_password,
    });

    let token = jwt.sign({ email }, process.env.TOKEN_KEY, { expiresIn: "6h" });
    user.token = token;
    res.status(200).json(user);
  }
});

app.get("/profile", verifyToken, function (req, res) {
  res.send("welcome to register page");
});

//login

app.post("/loginPage", formidable(), async function (req, res) {
  const { email, password } = req.fields;
  if (!(email && password)) {
    res.status(400).send("fill all the details");
  } else {
    let user = await register.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      let usertoken = jwt.sign({ email }, process.env.TOKEN_KEY, {
        expiresIn: "6h",
      });
      user.token = usertoken;
      res.status(200).send("logged in" + " " + user);
    } else {
      res.status(403).send("Incorrect password or userName");
    }
  }
});

//product
app.post("/product", formidable(), function (req, res) {
  const { productId, productName, numberOfProduct, price } = req.fields;

  if (!(productId && productName && numberOfProduct && price)) {
    res.status(400).send("provide the all fields");
  } else {
    let data = product.create({
      productId: req.fields.productId,
      productName: req.fields.productName,
      numberOfProduct: req.fields.numberOfProduct,
      price: req.fields.price,
    });
    res.status(200).send(" product database created");
  }
});

app.listen(port, () => console.log(`my project is running at ${port} server`));
