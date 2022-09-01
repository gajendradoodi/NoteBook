const express=require('express');
const router=express.Router();
const fetchUser=require('../middleware/fetchUser')
const Notes=require('../models/Notes')
const { body, validationResult } = require('express-validator');
 //this will give the all the notes of a loggedin user
router.get('/fetchallnotes',fetchUser,async (req,res)=>{
    try{
        const notes=await Notes.find({user:req.user.id})
        
    res.json(notes)
    }catch(error)
    {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }

})


router.post('/addnote',fetchUser,[
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('description','Enter a valid description').isLength({ min: 5 }),
    
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {title,description,tag}=req.body;
    try{
      const note=new Notes({
          title,description,tag,user:req.user.id
      })

      const savedNote=await note.save();
      res.json(savedNote)

    }catch(error)
    {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
    })

router.put('/updatenote/:id',fetchUser,[
        body('title','Enter a valid title').isLength({ min: 3 }),
        body('description','Enter a valid description').isLength({ min: 5 }),
        
    ],async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        try{
       const {title,description,tag}=req.body
       const newNote={}
       if(title){newNote.title=title}
       if(description){newNote.description=description}
       if(tag){newNote.tag=tag}

       let note=await Notes.findById(req.params.id)
       if(!note){return res.status(404).send("Not Found")}
       if(note.user.toString()!==req.user.id){return res.status(404).send("Not Allowed")}
       note=await Notes.findByIdAndUpdate(req.params.id,newNote)
       res.json({note})
        }
        catch(error)
    {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
        })   
        
        
 router.delete('/deletenote/:id',fetchUser,async (req,res)=>{
           try{
           let note=await Notes.findById(req.params.id)
           if(!note){return res.status(404).send("Not Found")}
           if(note.user.toString()!==req.user.id){return res.status(404).send("Not Allowed")}
           note=await Notes.findByIdAndDelete(req.params.id)
           res.json({"Success":"Note has been deleted",note:note})
 }catch(error)
 {
     console.error(error.message)
     res.status(500).send("Some error occured")
 }
            }) 
router.delete('/deleteallnotes',fetchUser,async (req,res)=>{
    try{
        const notes=await Notes.find({user:req.user.id})
                for(let index=0;index<notes.length;index++)
                {
                    await Notes.findByIdAndDelete(notes[index]._id);
                }
               
                res.json({"Success":"Notes are deleted",notes:notes})
   
    }catch(error)
    {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
                
                 })         
module.exports=router