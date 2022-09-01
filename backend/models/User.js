const  mongoose=require('mongoose')
const { Schema } = mongoose;
const UserSchema=new Schema({
   name:{
       type:String,
       required:true
   },
   email:{
    type:String,
    required:true,
    unique:true  
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});
const User=mongoose.model('user',UserSchema);
//to create the keys for unique one which is email
//User.createIndexes()
module.exports=User