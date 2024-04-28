import React from 'react'
import { Link } from 'react-router-dom'
import logoImg2 from '../images/logo2.png'

const Navbar = () => {
  return (
  <header className='sticky top-0  bg-purple-600 shadow-lg z-50 h-24 flex items-center text-white'>
    <div className='flex items-center relative pl-5  '>
    <div>
    <img   src= {logoImg2} className='h-[60px] max-w-[14rem] rounded-2xl' />
    </div>
    <div className='flex flex-shrink-0 items-center ml-44 gap-10 w-[50vw] '>
    
            <Link to="/" className=' hover:scale-125 hover:text-black hover:font-bold'>HOME</Link>
            <Link to="/events" className=' hover:scale-125 hover:text-black hover:font-bold'>EVENTS</Link>
            <Link to="/members" className=' hover:scale-125 hover:text-black hover:font-bold'>MEMBERS</Link>
            <Link to="/about" className=' hover:scale-125 hover:text-black hover:font-bold'>ABOUT</Link>
         </div>
         <div className=' absolute w-[13vw] left-[85vw] '> 

            <Link to="/Membershipform"><button className='rounded-md bg-white text-black  px-5  hover:scale-125 hover:font-bold'>Join now</button></Link>
         </div>
         
       
    </div>
    
  

   </header> 
  )
}

export default Navbar