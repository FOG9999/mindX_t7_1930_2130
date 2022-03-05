var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  userController.signUp(email, password, function (data) {
    if (data.errorCode) {
      res.send({ msg: data.errorMessage });
    } else {
      res.send(data)
    }
  })
})

module.exports = router;
