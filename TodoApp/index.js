const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config();
const db = require("./config/database")();
const authrouter = require("./routes/auth.js")
const postrouter = require("./routes/post.js")

const app = express();
app.use(cors())
app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({limit : "30mb" , extended : true}))



app.use("/",authrouter)
app.use("/", postrouter)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})