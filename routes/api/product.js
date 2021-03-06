const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Product routes for /api/product/
router.route("/")
    .get(productsController.findAll)
    .post(productsController.create);

// Product routes by ID: /api/product/single/:id
router.route("/single/:id")
    .get(productsController.findById)
    .put(productsController.update)
    .delete(productsController.remove);

// Product route for /api/product/search
router.route("/search/:query")
    .get(productsController.search)

module.exports = router;