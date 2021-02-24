class UsersController {
  getUser(req, res, next) {
    res.status(200).send({ message: "getUser" });
  }
  getAllUsers(req, res, next) {
    res.status(200).send({ message: "getAllUsers" });
  }
}

module.exports = new UsersController();
