const mongoose = require('mongoose')
const db = async ()=>{
    try {
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
} 

module.exports = {db};