const mongoose = require("mongoose")

const postschema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    stock: {
        type : Number,
        default : 0
    },
    date : {
        type :Date,
        default : new Date()
    }

})

module.exports = mongoose.model("post",postschema)