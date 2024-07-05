import React, { useRef, useState } from 'react'
import Header from './Header'
import {validateData} from "../utils/Validate"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';

function Login() {
  const [signIn ,setSignIn] = useState(true)
  const[errorMessage,setErrorMessage] =useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  function handleButton(e){
    e.preventDefault()

const message = validateData(email.current.value,password.current.value)
setErrorMessage(message)

if(message) return;
if(!signIn){
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ " " + errorMessage)
    // ..
  });
}
if(signIn){
 


signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + ""+ errorMessage)
  });
}
  }

  function handleSignIn(e){
    e.preventDefault()
    setSignIn(!signIn)
  }
  return (
    <>
    <div className='login-outer relative '>
      <img  className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg'/>
    <Header />
    <div className='form-outer w-4/12  bg-black bg-opacity-50 p-5 absolute m-auto left-0 right-0 rounded-lg '>
    <div className='form-title text-white text-2xl'>
      {signIn?"Sign In":"Sign Up"}
    </div>
                  <form>
                    {signIn? "":<div className='name my-3'>
<input ref={name} className='w-full rounded-lg  bg-black bg-opacity-50 text-white outline-none  text-lg border-2 p-2' type='text' placeholder='Name'/>
</div>}
                    
<div className='email my-3'>
<input ref={email}  className='w-full rounded-lg  bg-black bg-opacity-50 text-white outline-none  text-lg border-2 p-2' type='email' placeholder='Email'/>
</div>
<div className='password my-3'>
<input ref={password} className='w-full rounded-lg  bg-black bg-opacity-50 text-white outline-none  text-lg border-2 p-2' type='password' placeholder='Password'/>
</div>
<div className='error-msg text-red-700 text-lg'>{errorMessage}</div>
<div className='submit_btn'>
  <button className='bg-red-600 text-white w-full rounded-lg text-lg p-2' onClick={handleButton} >{signIn?"Sign In": "Sign Up"}</button>
</div>

<p className='text-white text-lg cursor-pointer p-2' onClick={handleSignIn}>{signIn?"New to Netflix ? Sign Up":"Already Registered ? Sign In Now"}</p>


                  </form>
                </div>
    </div>
    
    </>
    


  )
}

export default Login