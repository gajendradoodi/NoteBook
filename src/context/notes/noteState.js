import NotesContext from "./notesContext";
import { useState } from "react";
import {
 useNavigate
 } from 'react-router-dom'
const NoteState=(props)=>{
  const host="http://localhost:5000";
  const StringAuthToken=localStorage.getItem("token")
  const navigate=useNavigate()
   /* const s={
         name:"nothing",
         class:"16b"
    }
    const [state,setState]=useState(s)
    const update=()=>{
        setTimeout(() => {
            setState({
                name:"ohkbpt",
                class:"15b"
            })
        }, 2000);
    }*/
    const initialNotes=[];

      const [notes,setNotes]=useState(initialNotes)
      const deleteAllNotes=async()=>{
        const response=await fetch(`${host}/api/notes/deleteallnotes`,{
          method:"DELETE",
          headers:{
            'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
          }
        });
        const json=await response.json();
        console.log(json)
        setNotes(json)
      }
      const fetchAllNotes=async()=>{
        if(StringAuthToken.length===0)
        {
          navigate("/sign-in")
        }
        const response=await fetch(`${host}/api/notes/fetchallnotes`,{
          method:"GET",
          headers:{
            'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
          }
        });
        const json=await response.json();
        console.log(json)
        setNotes(json)
      }
      const addNote=async(title,description,tag)=>{
      /*  const note={
          "_id": "61e4b613047dab38db9",
          "user": "61ee3b83468f7c8fbb4ed78c",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-01-24T16:05:31.585Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
        console.log(note)*/


        const response=await fetch(`${host}/api/notes/addnote`,{
          method:"POST",
          headers:{
            'auth-token': StringAuthToken,
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({title,description,tag})
        });
        const json=await response.json();
        console.log(json)
        setNotes(notes.concat(json))
       // fetchAllNotes();
      
      }
      const deleteNote=async(id)=>{
      /* console.log("deleteing"+id)
       const newNotes=notes.filter((note)=>{return note._id!==id})
       setNotes(newNotes);*/
       const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:"DELETE",
        headers:{
          'auth-token': StringAuthToken,
          'Content-Type': 'application/json'
        }
      });
      const json=await response.json();
      console.log(json)
      const newNotes=notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
     // fetchAllNotes();
      }
      const editNote=async(id,title,description,tag)=>{
        const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
          method:"PUT",
          headers:{
            'auth-token': StringAuthToken,
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({title,description,tag})
        });
        const json=await response.json();
        console.log(json)
        let newNotes=JSON.parse(JSON.stringify(notes))
        for(let i=0;i<notes.length;i++)
        {
          if(newNotes[i]._id===id)
          {
            newNotes[i].title=title;
            newNotes[i].description=description;
            newNotes[i].tag=tag;
            break
          }
        }
        setNotes(newNotes)
       // fetchAllNotes();
      }
      console.log(notes)
      console.log(initialNotes)
return (
    <NotesContext.Provider value={{notes,addNote,deleteNote,editNote,fetchAllNotes,deleteAllNotes}}>
        {props.children}
    </NotesContext.Provider>
)
}
export default NoteState