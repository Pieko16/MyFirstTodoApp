const router = require("express").Router();
const {login , register} = require("../controllers/auth.js")

//Post
router.post("/register",register)
router.post("/login",login)


//Get


module.exports = router