module.exports = {
  authenticateRequest: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).send({
        msg: "Not authenticated",
      });
    }
  },
};
