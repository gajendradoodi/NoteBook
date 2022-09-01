
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState} from 'react'
function App() {
  const [alert, setalert] = useState("");

  const showAlert=(message,type)=>{
    console.log("yaahin par")
    setalert({
      text:message,
      type:type
    })
    setTimeout(()=>{
    setalert(null);
    },1500);
    
   }
  return (
    
    <>
        <Router>
    <NoteState>

    <Navbar/>
    <Alert alert={alert} />
       <div className="container">
       <Routes> 
          <Route exact path="/sign-in"  element={<Login showAlert={showAlert}/>} />
          <Route exact path="/sign-up"  element={ <Signup showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About/>} />
          <Route path="/"  element={<Home showAlert={showAlert}/>} />
        
        </Routes>
        </div>
       
       
        </NoteState>
        </Router>
    </>
  );
}

export default App;
