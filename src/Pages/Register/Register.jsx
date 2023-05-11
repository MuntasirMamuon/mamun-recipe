import React, {  useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProvider';


const auth =getAuth(app)


const Register = () => {
    const {createUser,userDetails} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/home';
    const [errors, setErrors] = useState('')
   
  
    const registerHandling = (event) =>{
        event.preventDefault()
        setErrors('')
       
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email,photo,password)
       if(password.length<6) {
        toast('plase 6 characters password ')
        return
       }
    createUser(email,password,name,photo)
    .then(result =>{
      const createdUser= result.user;
      console.log(createdUser)
      userDetails(name,photo)

      navigate(from ,{replace: true})
    
      
     
    
    })
    .catch((error) =>{
        setErrors(error.message)

    })

    }
    return (
        <div>
            
<div className="body">
<form onSubmit={registerHandling} className="box">
<span className="borderLine"></span>
<div className="form">
  <h2>Register</h2>
  <div className="inputBox">
    <input type="text" name="name" required />
    <span>Name</span>
    <i></i>
  </div>
  <div className="inputBox">
    <input type="text" name="photo" required />
    <span>Photo Url</span>
    <i></i>
  </div>
  <div className="inputBox">
    <input type="email" name="email" required />
    <span>Email</span>
    <i></i>
    < ToastContainer/>
  </div>

  <div className="inputBox">
    <input type="password" name="password" required />
    <span>Password</span>
    <i></i>
  </div>
  <div className="links">
  <span className='text-white'>{errors}</span>
  
    <Link to="/login">Already Have a Accoutn? Login</Link>
  </div>
  <input type="submit" value="Register" />
  
</div>
</form>
</div>

        </div>
        
    );
};

export default Register;
 