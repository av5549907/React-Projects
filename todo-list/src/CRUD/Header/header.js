import React from 'react'
import { addItem } from '../crud/actionCreactor'
import { NavLink } from 'react-router-dom'

export const Headers=()=>{
    return(
    <nav>
    <NavLink to="/"  >
      List
    </NavLink>
    {" | "}
    <NavLink to="/remove" >
      +data
    </NavLink>
    {" | "}
    <NavLink to="/ndt" >
      -data
    </NavLink>
  </nav>
    )
  
}
