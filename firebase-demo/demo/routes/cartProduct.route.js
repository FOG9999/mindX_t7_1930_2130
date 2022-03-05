const cartProductRouter = require("express").Router();
const cartProductController = require("../controllers/cartProduct.controller");

cartProductRouter.post("/insert-fake-cartProduct", (req, res, next) => {
  cartProductController.insertFakeCartProducts((resData) => {
    res.send(resData);
  });
});

module.exports = cartProductRouter;