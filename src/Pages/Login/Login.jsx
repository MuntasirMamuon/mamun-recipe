import React, { useContext, useState } from 'react';
import {FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const {signInUser,signInWithGithub, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
  const location = useLocation();
  const[error,setError]=useState('')
  const[sucess,setSucess]=useState('')
  console.log(location);
  
  const from = location.state?.from?.pathname || '/';


    const loginHandling = (event) =>{
        event.preventDefault()
        setError('')
        // setSucess('')
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;

        console.log( email,password)
         
        signInUser(email, password)
       .then(result =>{
        const createdUser = result.user;
        console.log(createdUser)
        navigate(from ,{replace: true})
        setSucess(toast('signIn Succesfull'))
       
       })
       .catch(error =>{

        setError(toast("wrong-password"))
       })
        

    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from ,{replace: true})
            setSucess(toast('GoogleSignIn Sucessfully'))
           
            
        })
        .catch(error => console.log(error))
    }
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from ,{replace: true})
            setSucess(toast('GithubSignIn Sucessfully'))
            
        })
        .catch(error => setError(toast('error.message')))

    }
    return (
        // <div>
        //     <div className="hero bg-base-200 lg:w-1/2 mx-auto mb-10 mt-4 p-4">
        //     <div className="hero-content flex-col">
        //         <div className="text-center mb-4">
        //             <h1 className="text-3xl font-bold title-text">Login now!</h1>
    
        //         </div>
        //         <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
        //             <form className="card-body" onSubmit={loginHandling}>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        //                     <label className="label">
        //                         <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
        //                     </label>
        //                 </div>
        //                 <div className="form-control mt-6">
        //                     <button className="btn relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-700 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-700">
        //                     <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-pink-700"></span>
        //                         <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        //                         <span className="relative text-white">
        //                         Login</span></button>

                        
        //                 </div>
        //             </form>
        //             <p className='mb-4 ml-6'>
        //             New to Cooking Alchemist? Please 
        //             <Link to='/register' className="label-text-alt link link-hover text-emerald-700">
        //                 <span className='text-xl ml-1 font-bold'>Register</span>
        //             </Link>
        //             </p>

        //             <div className='mb-4'>
        //                 <p className='mt-2 text-xl ml-6'>Sign in with: </p>
        //             <div className='text-center'>
        //             <button className="btn btn-primary mr-1" onClick={handleGoogleSignIn}><Link><FaGoogle  className='text-white'/></Link></button>
        //             <button  className="btn btn-primary" onClick={handleGithubSignIn}><Link><FaGithub  className='text-white'/></Link></button>
        //             </div>
                
        //             </div>
        //     </div>
        //     </div>


        // </div>
        // </div>
       <div>
      <div className="body">
        <div className="box">
          <form onSubmit={loginHandling} className="form">
            <h2>Sign in</h2>
           
            <div className="inputBox">
              <input type="email" name="email" required />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required />
              <span>Password</span>
             
              <i></i>
              
            </div>
          {/* <span className='text-red-700'>{error}</span> */}
            <div className="links">
              

              <Link to="/register">Create a new Account</Link>
            </div>
            <input className="" type="submit" value="login" />
            <div className=" text-white flex mt-10  mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="border primary-color p-2 flex items-center "
              >
                <FaGoogle />{" "}
                <Link className="text-white">Signin with Google</Link>
              </button>
              <button
                onClick={handleGithubSignIn}
                className="ml-4 border primary-color p-2 flex items-center"
              >
                <FaGithub /> <Link>Signin with Git Hub</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div> 
    );
};

export default Login;

