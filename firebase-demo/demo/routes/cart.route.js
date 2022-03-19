const cartRouter = require('express').Router();
const cartController = require('../controllers/cart.controller');
const { authenticateRequest } = require("../middlewares/auth.middleware");

cartRouter.post("/insert-fake-cart", (req, res, next) => {
    // request method GET, POST
    cartController.insertFakeCarts((resData) => {
       res.send(resData);
    });
 });


module.exports = cartRouter;