var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");
const { authenticateRequest } = require("../middlewares/auth.middleware");

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

router.post("/update-default-pass",  (req, res, next) => {
   userController.updateDefaultPasswordsForAllUser((resData) => {
      res.send(resData);
   });
});
router.get("/get-profile", authenticateRequest, function (req, res, next) {
   res.send(req.user);
})
/**
 * KHI REDIRECT ĐẾN ENDPOINT NÀY CÓ NGHĨA USER ĐÓ AUTHEN THẤT BẠI
 */
router.get("/not-found", (req, res) => {
   res.status(401).send({
      error: true,
      errorMsg: "Đăng nhập thất bại",
   });
});

module.exports = router;

