const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");

const router = Router();
const SECRET = "pokemon";
const jwtExpirySeconds = 300000;

router.post("/api/auth/registration", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already exisits. Please sign in");
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
      });
      await user.save();
      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
});

router.post("/api/auth/login", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(401).send(error.details[0].message);
  } else {
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Incorrect email or password." });
      }
      const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!correctPassword) {
        return res
          .status(400)
          .json({ message: "Incorrect email or password." });
      }
      const token = jwt.sign({ id: user._id }, SECRET);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: jwtExpirySeconds * 1000,
      });
      res.json({
        message: "Successfully logged in",
        token,
        user: {
          name: user.name,
          id: user._id,
          email: user.email,
        },
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
});

module.exports = router;
