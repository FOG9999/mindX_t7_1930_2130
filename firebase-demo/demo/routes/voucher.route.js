const voucherRouter = require("express").Router();
const voucherController = require("../controllers/voucher.controller");

voucherRouter.post("/insert-fake-voucher", (req, res, next) => {
  voucherController.insertFakeVouchers((resData) => {
    res.send(resData);
  });
});

module.exports = voucherRouter;
