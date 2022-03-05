const db = require("../database/database");
const fakeUsers = require("../data.json").message.users;

module.exports = {
  insertFakeUsers: async (done) => {
    try {
      const batch = db.batch();
      fakeUsers.forEach((user) => {
        const userRef = db.collection("users").doc();
        batch.create(userRef, user); // tạo ra 1 câu lệnh write vào collection users
      });
      const res = await batch.commit();
      done(res);
    } catch (error) {
      done(error);
    }
  },
};
