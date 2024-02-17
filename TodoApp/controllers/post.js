const postschema = require("../models/post.js")


const getPosts = async (req,res) => {
    try{
        const getPost = await postschema.find()
        res.status(200).json({
            getPost
        })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

const getDetail = async (req,res) => {
    try{
        const {id} = req.params;
        const detail = await postschema.findById(id)
        res.status(200).json({
            detail
        })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}
const getUpdate = async (req,res) => {
    try{
        const {id} = req.params; 
        const updatepost= await postschema.findByIdAndUpdate(id, req.body , {new : true}) 
        res.status(201).json({
            updatepost
        })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}
const deletePost = async (req,res) => {
    try{
        const {id} = req.params; 
       await postschema.findByIdAndDelete(id)
        res.status(201).json({
            message : "Silme basarili"
        })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}
const createPost = async (req,res) => {
    try{
        const newPost = await postschema.create(req.body)
        res.status(201).json({
            newPost
        })
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

const searchPost = async (req,res)=>{
    try{
        const {search,tag} = req.query;
        const title = new RegExp(search,"i") //Buyuk harf kucuk harf duyarını kaldırır
        const post = await postschema.find({$or : [{title}] , tag : {$in : tag.split(",")}})
        res.status(201).json({
           post
        })

    }catch(err){
        console.log(err)
    }

}

module.exports = {
    getDetail,
    getPosts,
    getUpdate,
    deletePost,
    createPost,
    searchPost
}