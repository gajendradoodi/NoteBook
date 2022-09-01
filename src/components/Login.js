import React ,{useState}from 'react';
import { useNavigate} from 'react-router-dom';

const Login =  (props) => {
 
    const navigate=useNavigate()
    const [credentials,setcredentials]=useState({email:"",password:""})
    const host="http://localhost:5000";
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${host}/api/auth/loginuser`,{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json=await response.json();
          console.log(json)
          if(json.Success)
          {
            props.showAlert("Login was Successfull","success")
             localStorage.setItem('token',json.AuthToken)
             navigate('/')//just like history if we want to go to another page automatically
          }
          else{
            props.showAlert("Can't Login","error")
                alert("nghjm")
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
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"   name='email'  value={credentials.email} onChange={onChange}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" onChange={onChange} value={credentials.password} required={true} minLength={5} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>;
};

export default Login;
