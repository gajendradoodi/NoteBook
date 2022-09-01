import React, { useContext,useState } from 'react';
import NotesContext from '../context/notes/notesContext';
const AddNote = (props) => {
    const context=useContext(NotesContext)
    const {addNote}=context
    const [note, setnote] = useState({title:"",description:"",tag:""});
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        props.showAlert("Note Added","success")
        setnote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
    }
  return <div>
      <h2>Add A Note</h2>
      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" value={note.title} name="title" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description"  value={note.description} name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange}/>
  </div>
  <button type="submit"  disabled={note.title.length<5||note.description.length<5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
  </div>;
};

export default AddNote;
