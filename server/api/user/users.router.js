const express = require("express");
const usersRouter = express.Router();
const { getUser, getAllUsers } = require("./users.controller");
usersRouter.get("/user", getUser);
usersRouter.post("/users", getAllUsers);

module.exports = usersRouter;
