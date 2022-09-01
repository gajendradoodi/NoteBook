const  mongoose=require('mongoose')
const { Schema } = mongoose;
const NotesSchema=new Schema({
    user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'user'
    },
   title:{
       type:String,
       required:true
   },
   description:{
    type:String,
    required:true,
   
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports=mongoose.model('notes',NotesSchema);
//to create the schema we need to first include the mongoose for mongodb after that from the mongoose
//we need to include the schema to create that one 
//now for creating schema just use the new keyword and then javascript object 
//after that using the mongoose need to export this schema using the model
