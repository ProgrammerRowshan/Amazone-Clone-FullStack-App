import Image from 'next/image'
import logo from '../public/amazon.png'
import { useState } from 'react'
import {FaShoppingCart, } from 'react-icons/fa'
import {BsSearch } from 'react-icons/bs'

const Header = () => {
const [logIn, setLogIn]=useState(false)
 
  return (
    <header>
      <div className='flex bg-[#232f3e] p-3 items-center flex-grow '>
        {/* // ==================== Image / Logo ==================== */}
       <div className='flex flex-grow items-center'>
         <Image src= {logo} alt="Amazon" height={80} width={140} className="cursor-pointer h-[40px] w-[120px]"/>
       </div>

        {/* // ==================== Input / Search option ==================== */}
       <div className='hidden sm:flex bg-yellow-400  mx-2 items-center hover:bg-yellow-500 flex-grow   rounded-md '>
          <input  placeholder='Search...' type="text" className='h-full flex flex-shrink rounded-l-md focus:outline-none p-2 flex-grow' />
          <span className='px-4 cursor-pointer'><BsSearch/></span>
       </div>

        {/* // ==================== Sign In SignOut other options ==================== */}
        <div className='flex sm:flex text-white items-center text-xs space-x-8 whitespace-nowrap relative mx-6'>

          {/* // Login part ================== */}
          <div className='relative text-white flex flex-col'>
            {logIn ?  <button className='  bg-yellow-400 text-center px-2   cursor-pointer py-1 text-black font-bold   mt-2   sm:py-[2px]'>{"LogOut"}</button> : <span className='cursor-pointer'>{'SignIn'}</span> }
           {!logIn &&  <span className='cursor-pointer'>LogIn</span>}
          </div>

          {/* Returns and orders =================== */}
          <div className='flex flex-col '>
            <span className='cursor-pointer'>Returns</span>
            <span className='font-extrabold cursor-pointer md:text-sm'>& Orders</span>
          </div>

            {/* Basket ================== */}
            
             <div className='relative cursor-pointer flex items-center space-x-1 mr-3'>
               <span className="absolute top-0 right-0 sm:h-4 h-3 w-3 sm:w-4 text-xs bg-yellow-400 text-center rounded-full text-black font-bold">5</span>
               <FaShoppingCart className='w-7 h-7 sm:w-10 sm:h-10 text-white'/>
             </div>
          </div>

        <div>

        </div>
         
       </div>
    </header>
  )
}

export default Header