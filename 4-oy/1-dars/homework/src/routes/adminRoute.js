const router = require("express").Router
const controller = require("../controller/adminController")

router.get("/admin", controller.GET)

module.exports = router