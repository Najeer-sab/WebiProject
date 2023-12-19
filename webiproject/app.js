const express = require("express");
require("dotenv").config();
const app = express();

const formidable = require("express-formidable");
const register = require("./model/register");
require("./database/conn");

const port = process.env.PORT;

// Post Method
app.post("/", formidable(), function (req, res) {
  const { firstName, lastName, email, phoneNumber } = req.fields;

  if (!(firstName && lastName && email && phoneNumber)) {
    res.status(400).send("provide the all fields");
  } else {
    const data = register.create({
      firstName: req.fields.firstName,
      lastName: req.fields.lastName,
      email: req.fields.email,
      phoneNumber: req.fields.phoneNumber,
    });
    res.status(200).send("databases created");
  }
});

app.listen(port, () => console.log(`my project is running at ${port} server`));
