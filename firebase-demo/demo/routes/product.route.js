const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');
const { authenticateRequest } = require('../middlewares/auth.middleware');

productRouter.post('/insert-fake-product', (req, res, next) => {
    // request method GET, POST
    productController.insertFakeProducts((resData) => {
        res.send(resData);
    });
});

productRouter.get('/search', authenticateRequest, (req, res) => {
    const { searchKey, category, page } = req.query;
    productController.getListProducts(searchKey, category, page, (data) => {
        res.send(data);
    });
});

productRouter.get('/:id', (req, res, next) => {
    // lấy ra cái id mà FE gửi lên
    const productId = req.params.id;
    productController.getProductDetail(productId, (data) => {
        res.send(data);
    });
    // call function trong controller và return về FE
});

module.exports = productRouter;
