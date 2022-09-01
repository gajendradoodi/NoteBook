import React, { useContext,useEffect ,useRef,useState} from 'react';
import NotesContext from '../context/notes/notesContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
const Notes = (props) => {
    const {showAlert} =props
    const context=useContext(NotesContext)
    const {notes,fetchAllNotes,deleteAllNotes,editNote}=context
    console.log(notes)
    useEffect(() => {
        fetchAllNotes();
        // eslint-disable-next-line
    }, []);
    // we are using this line in useEffect just to use it as componentDidMount
    const updateNotehandle=(nott)=>{
        console.log(nott)
        setnote({id:nott._id,title:nott.title,description:nott.description,tag:nott.tag})
        refOpen.current.click();
      
    }
    const [note, setnote] = useState({title:"",description:"",tag:""});
    const handleAllDeleteClick=()=>{ 
      showAlert("Deleted Successfully","success")
      deleteAllNotes();
      
    }
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(note)
        editNote(note.id,note.title,note.description,note.tag)
        refClose.current.click();
        showAlert("Updated Successfully","success")
    }
    const onChange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
    }
    const refOpen = useRef(null);
    const refClose= useRef(null);
  return <div>
      <AddNote showAlert={showAlert} />
      
<button type="button" ref={refOpen} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description"  value={note.description}  name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag"  value={note.tag} name="tag" onChange={onChange}/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={note.title.length<5||note.description.length<5} className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
{notes.length===0?"":

<div className="container">
    <h2 >Your Notes</h2>
  <div className="row my-3">
      {notes&&notes.map((note)=>{return <NoteItem key={note._id} showAlert={showAlert} updateNotehandle={updateNotehandle} note={note}/> })}
  </div>
  {notes&& <div>
      <h4>Delete All Notes</h4>
      <i className="fas fa-trash" onClick={handleAllDeleteClick
        }></i></div>}
 
</div>}
    
  
  </div>;
};

export default Notes;
