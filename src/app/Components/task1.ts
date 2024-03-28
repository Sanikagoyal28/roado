export default function Task1() {
  // sampled data
  const userLogins: { userId: number; loggedIn: Date; loggedOut?: Date }[] = [
    { userId: 1, loggedIn: new Date("2024-03-01T08:00:00") },
    {
      userId: 2,
      loggedIn: new Date("2024-03-01T09:00:00"),
      loggedOut: new Date("2024-03-01T09:30:00"),
    },
    { userId: 3, loggedIn: new Date("2024-03-01T10:00:00") },
    { userId: 1, loggedIn: new Date("2024-03-05T08:00:00") },
    {
      userId: 8,
      loggedIn: new Date("2024-02-01T09:00:00"),
      loggedOut: new Date("2024-09-01T09:30:00"),
    },
  ];

  function getMonthlyUsers(
    logins: { userId: number; loggedIn: Date; loggedOut?: Date }[],
    targetDate: Date
  ) {
    const monthlyUsers: {
      [month: string]: { loggedUsers: Set<number>; activeUsers: Set<number> };
    } = {};

    logins.forEach(({ userId, loggedIn, loggedOut }) => {
      const monthYear = `${loggedIn.getMonth() + 1}-${loggedIn.getFullYear()}`;
      const currentMonth = `${
        targetDate.getMonth() + 1
      }-${targetDate.getFullYear()}`;

      //  no such entries present, initialise the array
      if (!monthlyUsers[monthYear]) {
        monthlyUsers[monthYear] = {
          loggedUsers: new Set(),
          activeUsers: new Set(),
        };
      }
      // If not, add user to the set of login users for this month
      monthlyUsers[monthYear].loggedUsers.add(userId);

      // for active, count if the user doesn't logged out or log out after target date
      if (
        loggedOut === undefined ||
        loggedOut.getTime() > targetDate.getTime()
      ) {
        // If user is active, add it to the set of active users for this month
        monthlyUsers[monthYear].activeUsers.add(userId);
      }
    });

    // final result
    const result = Object.keys(monthlyUsers).map((month) => ({
      month,
      loggedUsers: monthlyUsers[month].loggedUsers.size,
      activeUsers: monthlyUsers[month].activeUsers.size,
    }));

    // month less than equal to target -> return active count

    return result;
  }

  //   to return count of total active users
  function getTotalActiveUsers(
    monthlyStats: { month: string; loggedUsers: number; activeUsers: number }[],
    targetDate: Date
  ) {
    var users = 0;

    for (const { month, activeUsers } of monthlyStats) {
      const [monthStr, yearStr] = month.split("-");
      const monthNumber = parseInt(monthStr);
      const yearNumber = parseInt(yearStr);

      // convert month to date
      const monthDate = new Date(yearNumber, monthNumber - 1);

      // if the month is before or equal to the targetDate
      if (monthDate <= targetDate) {
        users += activeUsers;
      }
    }

    return users;
  }

  //   sample function call
  const targetDate = new Date("2024-03-1");
  const monthlyStats = getMonthlyUsers(userLogins, targetDate);
  const activeUsers = getTotalActiveUsers(monthlyStats, targetDate);
  console.log(monthlyStats);
  console.log(activeUsers);
}
