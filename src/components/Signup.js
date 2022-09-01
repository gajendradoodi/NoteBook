import React ,{useState}from 'react';
import { useNavigate} from 'react-router-dom';


const Signup = (props) => {
  const {showAlert}=props
    const navigate=useNavigate()
    const [credentials,setcredentials]=useState({name:"",email:"",password:""})
    const host="http://localhost:5000";
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${host}/api/auth/createuser`,{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
          });
          const json=await response.json();
          console.log(json)
          if(json.Success)
          {
            showAlert("Registered Successfully Please Sing-in","success")
            navigate('/sign-in')
          }
          else 
          {
            showAlert("Not registered","error")
            alert("xfvfbgf")
          }
          
    }
    const onChange=(e)=>{
        console.log("ohkhhh")
        setcredentials({...credentials,[e.target.name]:e.target.value});
        console.log(credentials)
      }
  return <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" name='name' className="form-control" onChange={onChange} value={credentials.name} required={true} minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"   name='email'  value={credentials.email} onChange={onChange}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" onChange={onChange} value={credentials.password} required={true} minLength={5}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>;
};

export default Signup;
