'use client';
import "./style.css"

import { useState } from 'react';
import { Link } from 'next/link';
export default function SignUp (){
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <>
        <header className=" ">
        <div className="container mx-auto flex items-center justify-between max-w-7xl  px-2 sm:px-6 lg:px-8 p-4">
          <div className="flex items-center">
          <img class="h-8 w-auto px-4" src="https://cdn.autoscrape.com/static/autoscrape/images/autoscrape-logo.653474f93379.svg" alt="Your Company"/>
  
           < a  href={"/"} className="text-xl text-white ransition-all cursor-pointer hover:text-gray-300">myScrape</a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a   className="text-white transition-all hover:text-gray-300" href="./jobScrape">Job scraping</a>
            <a className="text-white transition-all hover:text-gray-300" href="./userScrape">User scraping</a>
            <a  className="text-white transition-all hover:text-gray-300" href="companyScrape">Company scraping</a>
          </nav>
          <div className="hidden md:flex space-x-4">
            <a  className="text-white transition-all hover:text-gray-300" href="/login">Login</a>
            <a  className="text-white transition-all hover:text-gray-300" href="/signup">Signup</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
          <a  href="./jobScrape" className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
            job scraping
          </a>
          <a  href="./userScrape"    className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
         user scraping
          </a>
          <a  href="./companyScrape"      className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
    company scraping
          </a>
         
          <a href="/login"   className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
          Login
          </a>
          <a href="/signup"     className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
         Signup
          </a>
        </nav>
      </header>
               <div className=" main_container flex flex-col items-center justify-center min-h-screen  p-4">
          {/* <h1 className="text-5xl text-center mb-8 text-blue-500 font-bold"  ></h1> */}
        
      
         

            <form >
            <input type="text"
            
            placeholder="Full Name"
       
             required />
              <input type="email"
            
               placeholder="Email"
          
                required />
              <input type="password"
            
    
              placeholder="Password" required />
              <div className="fb-submit">
                <button type="submit" className="mt-5 mb-4  py-4 px-5 bg-violet-500 transition-all text-white font-semibold rounded-md shadow-md hover:bg-purple-500">Signup</button>
                <p>If you  have acount</p>
              </div>
              <hr />
           <a href="./login">
           <button className=" mt-5 mb-4 ml-12  py-4 px-20 bg-violet-500 transition-all text-white font-semibold rounded-md shadow-md hover:bg-purple-500">
                Login Now
              </button>
              </a>
            </form>
          </div>
          </>
    )
}