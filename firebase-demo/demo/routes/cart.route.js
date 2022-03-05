const cartRouter = require("express").Router();
const cartController = require("../controllers/cart.controller");

cartRouter.post("/insert-fake-cart", (req, res, next) => {
  cartController.insertFakeProducts((resData) => {
    res.send(resData);
  });
});

module.exports = cartRouter;