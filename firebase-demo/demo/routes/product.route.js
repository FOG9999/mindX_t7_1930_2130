const productRouter = require("express").Router();
const dataConfigController = require("../controllers/data-config.controller");
const productController = require("../controllers/product.controller");
const { authenticateRequest } = require("../middlewares/auth.middleware");

productRouter.post("/insert-fake-product", (req, res, next) => {
   const userId = req.user.id;
   const productId = req.body.productId;

   //    cartController.addToCart(userId, productId, data => {
   //       res.send(data);
   //    })

   // request method GET, POST
   productController.insertFakeProducts((resData) => {
      res.send(resData);
   });
});

productRouter.get("/search", authenticateRequest, (req, res) => {
   let { searchKey, category, page } = req.query;
   page = parseInt(page);
   productController.getListProducts(searchKey, category, page, (data) => {
      res.send(data);
   });
});

productRouter.get("/:id", (req, res, next) => {
   // lấy ra cái id mà FE gửi lên
   const productId = req.params.id;
   productController.getProductDetail(productId, (data) => {
      res.send(data);
   });
   // call function trong controller và return về FE
});


productRouter.post('/update-product-images', (req, res) => {
   dataConfigController.updateProductImages((data) => {
      res.send(data)
   })
})

module.exports = productRouter;
