const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./api/index");

//html routes
router.use(htmlRoutes);
//api routes
router.use('/api', apiRoutes);

module.exports = router;