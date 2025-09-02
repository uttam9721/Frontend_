import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <div className='flex justify-around items-center bg-[#FFFFFF] mt-5 shadow-lg '>
   <Link to={'/'}> <div><h1 className='font-bold text-2xl'> myShoo</h1></div></Link>
     <Link to={'/'}> <div className=''>Home</div>     </Link> 
     <Link to={'/shop'}> <div className=''>Shop</div></Link>
     <Link to={'/about'}> <div className=''>About</div></Link>
     <Link to={'/contact'}> <div className=''>Contact</div></Link>
      <div>
        <input className='border border-[#ccc] rounded-2xl pl-4' type="text" placeholder='search here.' name="" id=""  />
      </div>
     <div className='flex gap-10'>
       <div>Login</div>
      <div>Register</div>
     </div>
    </div>
    <hr className='mt-5' />
   </>
  )
}

export default Navbar
