const express = require("express");
const usersRouter = express.Router();
const { getUser } = require("./users.controller");
usersRouter.get("/users", getUser);

module.exports = usersRouter;
