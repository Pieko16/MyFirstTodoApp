const express = require("express");
const {auth} = require("../middleware/auth.js")

const router = express.Router();

const {getPosts,getDetail,getUpdate,deletePost,createPost,searchPost} = require("../controllers/post")

router.get("/searchPost",searchPost)
router.get("/getPosts",getPosts)
router.post("/createPost",auth ,createPost)
router.get("/getDetail/:id",getDetail)
router.patch("/getUpdate/:id",auth,getUpdate)
router.delete("/deletePost/:id",auth,deletePost)


module.exports = router

