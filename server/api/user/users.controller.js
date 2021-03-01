const { listUsers } = require("./fsUsers");
const listStatistic = require("../db/users_statistic.json");
class UsersController {
  async getUser(req, res, next) {
    try {
    } catch (error) {
      console.log("error", error);
    }
  }
  async getAllUsers(req, res, next) {
    try {
      const page = req.query.page;
      const pageStartIndex = (page - 1) * 20;
      const pageEndIndex = page * 20;

      const usersData = await listUsers();

      const getPageForOagination = usersData.slice(
        pageStartIndex,
        pageEndIndex
      );

      // const a = listStatistic.filter((item) => item.user_id === 31);
      console.log(getPageForOagination);

      res.status(200).json({ usersData: getPageForOagination });
    } catch (error) {
      console.log("error", error);
    }
  }
}

module.exports = new UsersController();
