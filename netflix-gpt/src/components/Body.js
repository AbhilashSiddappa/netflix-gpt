import React from 'react'
import Login from './Login'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Browse from './Browse'

function Body() {
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
  return (
    <div><RouterProvider router={routerApp}/></div>
  )
}

export default Body