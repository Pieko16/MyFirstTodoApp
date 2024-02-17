const mongoose = require("mongoose")

const dc = () => {
    mongoose.connect(process.env.DBLNK)
    .then(() => {console.log("Database connected")})
    .catch((Err) => {
        console.log(err)
    })
}

module.exports = dc;