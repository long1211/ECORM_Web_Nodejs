const express = require("express")
const router = express.Router()
const indexAdmin = require("../controllers/Admin.controllers")


router.get("/", indexAdmin.index)


module.exports = router
