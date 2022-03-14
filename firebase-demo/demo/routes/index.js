var express = require("express");
const dataConfigController = require("../controllers/data-config.controller");
const testController = require("../controllers/test.controller");
const userController = require("../controllers/user.controller");
const db = require("../database/database");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
   const cities = await testController.getCities(db);
   res.send(cities);
});

router.post("/insert-fake-user", async (req, res) => {
   userController.insertFakeUsers((response) => {
      res.send(response);
   });
});

router.post("/insert-field", (req, res) => {
   dataConfigController.addFieldToProducts((resData) => {
      res.send(resData);
   });
});

module.exports = router;
