const cartRouter = require('express').Router();
const cartController = require('../controllers/cart.controller');
// cartRouter.post()
cartRouter.get('/get-cart', (req, res) => {
    const userId = req.params.id;
    cartController.getCartForUser(userId, (data) => {
        res.send(data);
    });
});

module.exports = cartRouter;
