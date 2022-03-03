const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");

productRouter.post("/insert-fake-product", (req, res, next) => {
  // request method GET, POST
  productController.insertFakeProducts((resData) => {
    res.send(resData);
  });
});

module.exports = productRouter;
