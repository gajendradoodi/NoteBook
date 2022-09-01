import React, { useContext } from 'react';
import NotesContext from '../context/notes/notesContext';

const NoteItem = (props) => {
    const {note,updateNotehandle,showAlert}=props;

    const context=useContext(NotesContext)
    const {deleteNote}=context
  return <div className="col-md-3">
      <div className="card my-3" >
  
  <div className="card-body">
      <div className="d-flex align-item-center">
      <h5 className="card-title fs-2">{note.title}</h5>
      <i className="far fa-trash-alt mx-2" onClick={()=>{
          deleteNote(note._id)&&showAlert("Deleted Successfully","success")
      }}></i>
    <i className="far fa-edit mx-2 " onClick={()=>{
         updateNotehandle(note)
      }} ></i> 
      </div>
    <p className="card-text fs-4">{note.description}</p>
    <p className="card-text fs-6">{note.tag}</p>
  </div>
</div>
  </div>;
};

export default NoteItem;
