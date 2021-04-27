"use strict";

const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/user");

// Users.collection.drop()

const signupRouter = express.Router();

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
signupRouter.post("/signup", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send("Error Creating User");
  }
});

module.exports = signupRouter;
