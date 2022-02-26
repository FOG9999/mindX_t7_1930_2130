const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");

productRouter.post("/insert-fake-product", (req, res, next) => {
  productController.insertFakeProducts((resData) => {
    res.send(resData);
  });
});

module.exports = productRouter;
