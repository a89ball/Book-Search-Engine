const router = require('express').Router();
const userRoutes = require('./user-routes');
const path = require("path");
const bookRoutes = require("./bookRoutes.js");
const userRoutes= require("./user-routes");
const googleRoutes= require("./googleRoutes")


router.use("/google", googleRoutes)
router.use("/books", bookRoutes)
router.use('/users', userRoutes);


//serve up react front-end in production
router.use(function (req, res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});
module.exports = router;
