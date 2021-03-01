const { json } = require("express");
const express = require("express");
const loger = require("morgan");
const app = express();
const cors = require("cors");
const PORT = 1717;

const usersRouter = require("./api/user/users.router");

app.use(json());
app.use(loger("dev"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api", usersRouter);
app.listen(PORT, () => {
  console.log(`Server was run http://localhost:${PORT}`);
});
