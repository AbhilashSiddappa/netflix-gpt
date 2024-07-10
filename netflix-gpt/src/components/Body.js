import React, { useEffect } from 'react'
import Login from './Login'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Browse from './Browse';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice';


function Body() {
  const dispatch =useDispatch()
 
    const routerApp =createBrowserRouter([
        {
           path:"/",
           element:<Login/>, 
        },
        {
            path:"/browse",
            element:<Browse/>, 
         }
    ])

    useEffect(()=>{
    

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          
        } else {
          // User is signed out
          dispatch(removeUser());
        
        }
      });
    },[])
  return (
    <div><RouterProvider router={routerApp}/></div>
  )
}

export default Body