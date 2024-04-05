import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import './navbar.css'
export const Navbar = () => {
  return (
    <nav>
        <div>
            <h1  className='text-2xl p-5'>Todo App</h1>
        </div>
        <div>
        <CiMenuFries className='menu-icon'/>
        </div>
    </nav>
  )
}
