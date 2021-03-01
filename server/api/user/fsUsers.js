const { promises: fsPromises } = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "users.json");
const statisticPath = path.join(__dirname, "../db/users_statistic.json");

const allArrayTotalClick = [];
const allArrayTotalViewPage = [];

async function creaTetotalClick() {
  if (allArrayTotalClick.length > 0) {
    console.log("this length > 0");
    return;
  }
  console.log("this create file");
  const statisticData = JSON.parse(
    await fsPromises.readFile(statisticPath, "utf-8")
  );
  let i = 0;
  let result;
  do {
    i++;
    result = statisticData
      .filter((click) => click.user_id === i)
      .reduce((acc, click) => {
        return (acc += click.clicks);
      }, 0);

    const object = {
      id: i,
      totalClick: result,
    };
    allArrayTotalClick.push(object);
  } while (!result === false);
  {
    // console.log(allArrayTotalClick);
  }
}

async function creaTetotalViewPage() {
  if (allArrayTotalViewPage.length > 0) {
    console.log("this length > 0");
    return;
  }
  console.log("this create file");
  const statisticData = JSON.parse(
    await fsPromises.readFile(statisticPath, "utf-8")
  );
  let i = 0;
  let result;
  do {
    i++;
    result = statisticData
      .filter((click) => click.user_id === i)
      .reduce((acc, click) => {
        return (acc += click.page_views);
      }, 0);

    const object = {
      id: i,
      page_views: result,
    };
    allArrayTotalViewPage.push(object);
  } while (!result === false);
  {
    // console.log(allArrayTotalClick);
  }
}
async function listUsers() {
  await creaTetotalClick();
  await creaTetotalViewPage();
  const usersData = JSON.parse(await fsPromises.readFile(usersPath, "utf-8"));

  const result = usersData.map((data) => {
    return {
      email: data.email,
      first_name: data.first_name,
      gender: data.gender,
      id: data.id,
      ip_address: data.ip_address,
      last_name: data.last_name,
      date: "2019-10-21",
      page_views: allArrayTotalViewPage[data.id].page_views,
      clicks: allArrayTotalClick[data.id].totalClick,
    };
  });

  return result;
}

module.exports = {
  listUsers,
};
