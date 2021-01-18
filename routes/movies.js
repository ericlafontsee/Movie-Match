const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

// Matches with "/api/books"
router.route("/")
  .get(moviesController.findAll)
  .post(moviesController.create);


module.exports = router;

