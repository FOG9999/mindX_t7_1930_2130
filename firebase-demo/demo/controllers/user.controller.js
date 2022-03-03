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
  updateDefaultPasswordsForAllUser: async (done) => {
    try {
      const defaultPassword = process.env.DEFAULTPASSWORD;
      const batchUpdate = db.batch();
      const userList = await db.collection("users").listDocuments();
      userList.forEach((val, index) => {
        batchUpdate.update(val, {
          password: defaultPassword,
        });
      });
      const res = await batchUpdate.commit();
      done(res);
    } catch (error) {
      done(error);
    }
  },
  /**
   *
   * @param {*} userId
   * @param {*} done hàm callback sử dụng để lấy kết quả trả về để xử lý tiếp tại file khác khi hàm này xủ lý xong
   */
  findUserByid: async (userId, done) => {
    try {
      const userRef = db.collection("users");
      const foundUser = await userRef
        .where("id", "==", userId)
        .select([
          "username",
          "name",
          "id",
          "avatar",
          "created_time",
          "locked",
          "phone",
        ])
        .get();
      if (foundUser.empty) {
        done(null);
      } else {
        done(foundUser.docs[0]);
      }
    } catch (error) {
      done(error);
    }
  },
  /**
   * Xử lý khi user login
   * @param {*} username
   * @param {*} password
   * @param {*} done
   */
  authenticateUser: async (username, password, done) => {
    try {
      const userRef = db.collection("users");
      const foundUserWithUsername = await userRef
        .where("username", "==", username)
        .get();
      if (foundUserWithUsername.empty) {
        done({
          error: true,
          errorMsg: "Không tìm thấy tài khoản này",
        });
      } else {
        let isLoginScucess = false;
        let user;
        foundUserWithUsername.forEach((dt) => {
          if (dt.data().password === password) {
            delete dt.data().password;
            isLoginScucess = true;
            user = dt.data();
          }
        });
        if (isLoginScucess) {
          done(user);
        } else {
          done({
            error: true,
            errorMsg: "Mật khẩu không đúng",
          });
        }
      }
    } catch (error) {
      done({
        error: true,
        errorMsg: "Có lỗi xảy ra",
      });
    }
  },
};
