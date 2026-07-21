const express = require("express");
const router = express.Router();

const insecureRoutes = require("./insecure.routes");
const secureRoutes = require("./secure.routes");

router.use("/insecure", insecureRoutes);
router.use("/secure", secureRoutes);

module.exports = router;