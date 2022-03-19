const cartRouter = require("express").Router();
const cartController = require("../controllers/cart.controller");
const { authenticateRequest } = require("../middlewares/auth.middleware");

cartRouter.post("/insert-fake-cart", (req, res, next) => {
  cartController.insertFakeProducts((resData) => {
    res.send(resData);
  });
});

cartRouter.get("/get-cart", authenticateRequest, (req, res) => {
   const userId = req.user.id;
   cartController.getCartForUser(userId, (data) => {
      res.send(data);
   });
});

module.exports = cartRouter;
