//express 모듈과 User 모델 추가
const express = require("express");
const User = require("../models/User");

let findUser = User.find({name: "Dreamtree"});

module.exports = UserController;