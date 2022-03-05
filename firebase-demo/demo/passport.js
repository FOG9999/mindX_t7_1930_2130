const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  initPassport: (passport) => {
    // nhận username và password khi request gửi lên k có sessionId
    passport.use(
      new LocalStrategy((username, password, done) => {
        console.log("authenticating...");
        if (username === "xxx" && password === "xxx") {
          console.log("user verified");
          // nếu authen thành công thì lưu user vào session storage,
          // thực ra thông tin quan trọng nhất vẫn là userId
          done(null, { id: 1, name: "Demo User" });
        } else {
          // nếu fail thì return null (k có lỗi), false (authen fail)
          console.log("user not authenticated");
          done(null, false);
        }
      })
    );

    // nhận id từ serialize và truy vấn database với id đó để xác thực user
    passport.deserializeUser((id, done) => {
      console.log("deserializing...");
      if (id === 1) {
        console.log("deserialize success");
        done(null, {
          username: "xxx",
          password: "xxx",
          name: "Demo User",
        });
      } else {
        console.log("deserialize failed");
        done(null, false);
      }
    });

    // lấy cái id đã lưu trước đó từ new LocalStrategy và nhả cho deserialize
    passport.serializeUser((user, done) => {
      console.log("serializing...");
      done(null, user.id);
    });
  },
};
