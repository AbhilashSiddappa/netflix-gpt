import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(store=>store.user)
  const navigate =useNavigate()
  function handleSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
  
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
    <div className='header-outer'>
            <div className='header-inner'>
                <div className='header-logo z-10'>
                  <div className='wrap bg-black bg-opacity-50 flex justify-between items-center'>
                    <div className='logo'><h3 className= 'text-red-600 text-xl p-5'>Netflix App</h3></div>
                  

                    <span className='text-black font-bold'>{user?.displayName}</span><div className='btn'><button className='bg-red-600 text-white text-lg p-1  rounded-sm inline-block m-5' onClick={()=>handleSignOut()}>Sign Out</button></div>
                    </div>
                </div>

              
            </div> 
    </div>
    </>
  )
}

export default Header