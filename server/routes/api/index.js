const router = require('express').Router();
const userRoutes = require('./user-routes');
const path = require("path");
const bookRoutes = require("./bookRoutes.js")
const userRoutes= require("./user-routes")
router.use('/users', userRoutes);

module.exports = router;
