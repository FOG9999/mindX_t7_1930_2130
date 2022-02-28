var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.cookies);
  res.send("respond with a resource");
});

/**
 * với req: request được gửi từ user
 * res: cái sẽ trả về cho user
 * router.get("/", function (req, res, next) {
    xử lý logic sử dụng các .controller file
  });
 */

module.exports = router;
