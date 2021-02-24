const express = require("express");
const loger = require("morgan");
const app = express();
const PORT = 1717;

const usersRouter = require("./api/user/users.router");

app.use(loger("dev"));
app.use("/api", usersRouter);
app.listen(PORT, () => {
  console.log(`Server was run http://localhost:${PORT}`);
});
