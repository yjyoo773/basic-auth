"use strict";

const express = require("express");

const basicAuth = require("./basicAuth");
const signinRouter = express.Router();
// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
signinRouter.post("/signin", basicAuth, async (req, res) => {

  res.status(200).json({ user: req.user });
});

module.exports = signinRouter;
