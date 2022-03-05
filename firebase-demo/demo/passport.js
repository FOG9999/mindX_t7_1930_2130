const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  initPassport: (passport) => {
    passport.use(
      new LocalStrategy((username, password, done) => {
        console.log("authenticating...");
        if (username === "xxx" && password === "xxx") {
          console.log("user verified");
          done(null, { id: 1, name: "Demo User" });
        } else {
          console.log("user not authenticated");
          done(null, false);
        }
      })
    );

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

    passport.serializeUser((user, done) => {
      console.log("serializing...");
      done(null, user.id);
    });
  },
};
