var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const { initPassport } = require("./passport");
const session = require("express-session");
const passport = require("passport");
const { authenticateRequest } = require("./middlewares/auth.middleware");
const productRouter = require("./routes/product.route");
const cartRouter = require("./routes/cart.route");

var app = express();

require("dotenv").config({});

app.use(
   session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true,
   })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
   cors({
      origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
      methods: ["OPTIONS", "GET", "POST", "HEAD", "PUT"],
      credentials: true,
      allowedHeaders: ["Accept", "Accept-Language", "Content-Language", "Content-Type", "Authorization", "Cookie", "X-Requested-With,Origin", "Host"],
      // exposedHeaders: ["Set-Cookie"],
   })
);
initPassport(passport);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

////////////////////////// !important
app.use("/product", productRouter);

app.post("/api/auth/login", passport.authenticate("local", { failureRedirect: "/users/not-found" }), (req, res) => {
   res.send(req.user);
});

app.use("/cart", cartRouter);

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render("error");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

module.exports = app;
