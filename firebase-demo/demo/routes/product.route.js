const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");
const { authenticateRequest } = require("../middlewares/auth.middleware");

productRouter.post("/insert-fake-product", (req, res, next) => {

   const userId = req.user.id;
   const productId = req.body.productId;

   cartController.addToCart(userId, productId, data => {
      res.send(data);
   })

   // request method GET, POST
   productController.insertFakeProducts((resData) => {
      res.send(resData);
   });
});

productRouter.get("/search", authenticateRequest, (req, res) => {
   const { searchKey, category, page } = req.query;
   productController.getListProducts(searchKey, category, page, (data) => {
      res.send(data);
   });
});

module.exports = productRouter;
