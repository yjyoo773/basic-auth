"use strict";

// 3rd Party Resources
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
// Internal Modules
const signin = require('./auth/signin')
const signup = require('./auth/signup')


// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(cors())
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
app.use(signin)
app.use(signup)

module.exports = {
  server: app,
  start: (port, uri) =>
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(port, () => console.log(`server up on ${port}`));
      })
      .catch((e) => console.error("Could not start server", e.message)),
};
