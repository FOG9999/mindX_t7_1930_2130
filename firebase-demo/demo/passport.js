const userController = require("./controllers/user.controller");

const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  initPassport: (passport) => {
    // nhận username và password khi request gửi lên k có sessionId
    passport.use(
      new LocalStrategy((username, password, done) => {
        userController.authenticateUser(username, password, (data) => {
          if (data.error) {
            // nếu fail thì trả về false, passport sẽ hiểu là authen fail
            done(null, false);
          } else {
            // nếu thành công thì lưu lại để hàm serialize sau sử dụng
            done(null, data);
          }
        });
      })
    );

    // nhận id từ serialize và truy vấn database với id đó để xác thực user
    passport.deserializeUser((id, done) => {
      console.log("deserializing...");
      userController.findUserByid(id, (data) => {
        if (data.error) {
          done(null, false);
        } else done(null, data);
      });
    });

    // lấy cái id đã lưu trước đó từ new LocalStrategy và nhả cho deserialize
    passport.serializeUser((user, done) => {
      console.log("serializing...");
      done(null, user.id);
    });
  },
};
