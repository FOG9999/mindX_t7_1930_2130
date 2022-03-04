const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");

productRouter.post("/insert-fake-product", (req, res, next) => {
   // request method GET, POST
   productController.insertFakeProducts((resData) => {
      res.send(resData);
   });
});

productRouter.get("/search", (req, res) => {
   const { searchKey, category, page } = req.query;
   productController.getListProducts(searchKey, category, page, (data) => {
      res.send(data);
   });
});

module.exports = productRouter;
