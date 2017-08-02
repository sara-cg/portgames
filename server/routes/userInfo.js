const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

// Our user model
const User = require('../models/User');

const userInfoRoutes = express.Router();

userInfoRoutes.get('/:user', (req, res, next) => {
  const userName = req.params.user;
  User.findById(userName).then((user)=> {
    res.json(user);
  });

});

module.exports = userInfoRoutes;
