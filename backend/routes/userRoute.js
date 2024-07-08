const { Router } = require("express");
const userModel = require("../configs/models/userModel");
const userRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

userRouter.post("/register", (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(402).send("Missing information!");
    }
    //hashing password
    bcrypt.hash(myPlaintextPassword, 12, async (err, hashed) => {
      if (err) {
        console.log(err);
        res.send(500).send("error hashing password");
      } else {
        const user = new userModel({
          username,
          email,
          password: hashed,
        });
        await user.save();
      }
    });
    res.status(201).send("User registered successfully!");
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send("Missing information. Fill in all the fields!");
    }
    const userExists = await userModel.findOne({ email: email });
    if (!userExists) {
      return res.status(400).send("User not registered, sign up first!");
    }

    bcrypt.compare(password, userExists.password, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result) {
          jwt.sign(
            {
              email: userExists.email,
              password: userExists.password,
              role: userExists.role,
            },
            process.env.JWT_SECRET,
            (err, token) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.status(200).send({ accessToken: token });
              }
            }
          );
        } else {
          res.status(400).send("Wrong password!");
        }
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
