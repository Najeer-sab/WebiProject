const register = require("../model/register");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const createReg = async (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  } = req.fields;
  console.log(req.fields);

  if (
    !(
      userId &&
      firstName &&
      lastName &&
      email &&
      phoneNumber &&
      password 
    )
  ) {
    res.status(400).send("provide the all fields");
  } else {
    if (await register.findOne({ email: email })) {
      res.send("registers already exits");
    } else {
      let enc_password = await bcrypt.hash(req.fields.password, 10);
      const user = await register.create({
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: enc_password,
      });

      let token = jwt.sign({ email }, process.env.TOKEN_KEY, {
        expiresIn: "6h",
      });
      user.token = token;
      res.status(200).json(user);
    }
  }
};
//loginPage
const loginPage = async (req, res) => {
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
};

// Forgot Password
const forgetpassword = async (req, res) => {
  try {
    const { email } = req.fields;

    const user = await register.findOne( email );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("token");
    console.log("welcome to forgetpassword");
    // Generate random reset token for user
    const token = crypto.randomBytes(20).toString("hex");
    console.log(token);
    const resetExpires = Date.now() + 100 * 60 * 60;

    // Update user with reset token and expiration
    user.resetPasswordToken = token;
    user.resetPasswordExpires = resetExpires;
    await user.save();

    // Send reset password email for user
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: "najeersab2000@gmail.com",
        pass: "mndzxbudhmmzdcwn",
      },
    });

    const mailOptions = {
      to: user.email,
      from: "najeersab2000@gmail.com",
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n +
        Please click on the following link, or paste this into your browser to complete the process:\n\n +
        http://localhost:3000/reset/${token}\n\n +
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "Email sent successfully" });
    });
  } catch (err) {
    console.error("Error in forgot password:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

//  handle password reset link clicks
const resetpassword = async (req, res) => {
  try {
    const { token } = req.params;

    // Find user by reset token and check if it's valid and not expired
    const user = await register.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({
          message:
            "Password reset link is invalid or expired please check again",
        });
    }

    //  password reset
    res.send("this is a token of resetpassword" + " " + token); // Render the form with the token
  } catch (err) {
    console.error("Error in password reset:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

//  handle a new password after reset
const resetGetpassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.fields;

    // Find user by reset token
    const user = await register.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Password reset link is invalid or expired" });
    }

    // Set the new password and clear token-related fields
    const enccryptpassword = await bcrypt.hash(password, 10);
    user.password = enccryptpassword;
    user.resetPasswordToken = undefined; // Clear/reset the token; you might consider removing it from the user object entirely if needed
    user.resetPasswordExpires = undefined; // Clear/reset the expiration
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Error in resetting password:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createReg,
  loginPage,
  forgetpassword,
  resetpassword,
  resetGetpassword,
};
