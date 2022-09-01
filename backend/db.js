const mongoose =require('mongoose')
const mongooseURI="mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
//adding inotebook in url to create a new db with the name of inotebook
const connectToMongoose=()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("Connected Bro")
    })
}

module.exports=connectToMongoose