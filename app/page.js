"use client";

import Link from "next/link";
import "./style.css"
import Image from "next/image";
import React, { useState } from 'react';
import axios from 'axios';
import { Typography } from "@material-tailwind/react";


  



function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const SITEMAP = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
      title: "Help Center",
      links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
      title: "Products",
      links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
  ];
   
  const currentYear = new Date().getFullYear();

  const handleScrape = async () => {
    try {
      const response = await axios.post('http://localhost:5000/scrape', { url });
      setTitle(response.data.title);
      setError('');
    } catch (error) {
      setError('Failed to fetch data from the URL');
      setTitle('');
    }
  };
  
  return (
    <> 
             <div className="main">
          
             <header className=" ">
      <div className="container mx-auto flex items-center justify-between max-w-7xl  px-2 sm:px-6 lg:px-8 p-4">
        <div className="flex items-center">
        <img class="h-8 w-auto px-4" src="https://cdn.autoscrape.com/static/autoscrape/images/autoscrape-logo.653474f93379.svg" alt="Your Company"/>

          <Link href={"/"} className="text-xl text-white ransition-all cursor-pointer hover:text-gray-300">myScrape</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link  className="text-white transition-all hover:text-gray-300" href="./jobScrape">Job scraping</Link>
          <Link className="text-white transition-all hover:text-gray-300" href="./userScrape">User scraping</Link>
          <Link className="text-white transition-all hover:text-gray-300" href="companyScrape">Company scraping</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link className="text-white transition-all hover:text-gray-300" href="/login">Login</Link>
          <Link className="text-white transition-all hover:text-gray-300" href="/signup">Signup</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
        <Link href="./jobScrape" className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
          Job Scraping
        </Link>
       
        <Link href="./userScrape"      className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
     user Scraping
        </Link>
        <Link href="./companyScrape"    className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
        company Scraping
        </Link>
       
        <Link href="/login"   className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
        Login
        </Link>
        <Link href="/signup"     className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
       Signup
        </Link>
      </nav>
    </header>



<h1 className="md:text-5xl sm:text-3xl text-2xl text-white mt-20 text-center">Would you like to scraping today?</h1>
<div className="md:mt-36 mt-20 text-center text-base">
<input
        type="text"
       className="sm:px-32 md:px-20 px-14 outline-none rounded-md md:mb-0 mb-5  py-4"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button className="ml-6 sm:py-4 py-3 sm:px-16 px-10 bg-violet-500  transition-all text-white font-semibold  rounded-md shadow-md hover:bg-purple-500" onClick={handleScrape}>Scrape</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {title && <h2>Title: {title}</h2>}
</div>



<div className=" section-2     text-white text-center md:mt-36 mt-20">
<h2 className="md:text-5xl sm:text-3xl text-2xl ">
  hello, What's auto scrape
</h2>
<p className="sm:text-xl text-base mt-3 leading-10 tracking-widest">
Scrape for company , job , and user.<br />

Want to find out more about scraping?
</p>
<button className="mt-5 mb-4 sm:ml-6 sm:py-4 py-3 sm:px-5 px-3 bg-violet-500 transition-all text-white font-semibold rounded-md shadow-md hover:bg-purple-500">
  Let's go
</button>
{/* <div className="  w-full image-section   relative">

<img  className=" sm:absolute -bottom-80 w-full h-auto  " src="https://cdn.autoscrape.com/static/autoscrape/images/asset-dark.e39c4ecf00e8.svg" />

</div> */}
<div className="w-full image-section relative">
  <img
    className="sm:absolute -bottom-80 w-full h-auto"
    src="https://cdn.autoscrape.com/static/autoscrape/images/asset-dark.e39c4ecf00e8.svg"
  />
  {/* Add this gradient overlay for the fade effect */}
  <div className="absolute -bottom- w-full h-80 bg-gradient-to-b from-transparent to-[#010325]"></div>
</div>

</div>



{/* <div className="section-3  w-full flex md:justify-evenly md:flex-row  justify-center flex-col sm:mt-96 mt-0  items-center "> 
  <div className="job lg:w-[32%] md:w-[30%] w-full text-center w-auto "> 
  <img  className=" sm:w-80 w-50 rounded-full" src="./job.png" />
    <h2 className="lg:text-3xl text-2xl text-white font-bold">
      job Scraping
    </h2>
    <p className="text-gray-300 lg:text-base text-xs md:leading-8 text-center mt-2 md:tracking-widest">
    Job scraping, also known as job scraping or job board scraping, involves the automated extraction of job listings and related data from various online sources such as job boards, company career pages, and recruitment websites. </p>
  <Link href={"./jobScrape"}><button className=" mt-3 md:ml-6 lg:py-4 py-2 px-10 lg:px-16 bg-violet-500 transition-all text-white lg:font-semibold  rounded-md shadow-md hover:bg-purple-500">Find out now</button></Link>

  </div>
  <div className="profile lg:w-[32%] md:w-[30%] w-full  text-center mt-5 "> 
    <img className="md:ml-12  sm:w-80 w-50 sm:ml-40 ml-0 mb-5"  src="./user.svg"/>
    <h2 className="text-white text-3xl  font-bold" >
    user scraping
    </h2>
    <p className=" text-gray-300 sm:leading-8 lg:text-base text-xs mt-2 sm:tracking-widest">
    User scraping, often referred to as web scraping or data scraping, involves extracting data from websites by using automated tools or scripts. This process can be employed for a variety of purposes, such as gathering market research, or collecting intelligence</p>
   <Link href={"./userScrape"}> <button className=" mt-3 sm:ml-6 lg:py-4 lg:px-16 px-10 py-3 bg-violet-500 transition-all text-white font-semibold  rounded-md shadow-md hover:bg-purple-500">Find out now</button></Link>

  </div>
  <div className="company lg:w-[32%]  md:w-[30%] mt-4 w-full text-center "> 
    <img className="  rounded-full md:ml-5 sm:ml-36 ml-0  sm:w-80 w-50" src="./company.svg" />
    <h2 className="lg:text-3xl text-2xl font-bold text-white">
      company scraping
    </h2>
    <p className="text-gray-300 sm:leading-8 text-xs lg:text-base  mt-2 sm:tracking-widest">Company scraping involves extracting data from company websites or online business directories to gather information such as contact details, and other relevant business metrics. This technique can be valuable for competitive analysis and lead generation.</p>
    <button className=" mt-3 sm:ml-6 py-3 px-10 lg:py-4 lg:px-16 bg-violet-500 transition-all text-white font-semibold  rounded-md shadow-md hover:bg-purple-500">Find out now</button>

  </div>


</div> */}
<div className="section-3 w-full flex flex-col md:flex-row justify-evenly items-center space-y-10 md:space-y-0 md:space-x-4 sm:mt-96 mt-0"> 
  <div className="job lg:w-[32%] md:w-[30%] w-full text-center"> 
    <img className="sm:w-80 w-50 mx-auto rounded-full" src="./job.png" alt="Job Image" />
    <h2 className="lg:text-3xl text-2xl text-white font-bold">
      Job Scraping
    </h2>
    <p className="text-gray-300 lg:text-base text-xs md:leading-8 text-center mt-2 md:tracking-widest">
      Job scraping, also known as job scraping or job board scraping, involves the automated extraction of job listings and related data from various online sources such as job boards, company career pages, and recruitment websites.
    </p>
    <Link href={"./jobScrape"}>
      <button className="mt-3 lg:py-4 py-2 px-10 lg:px-16 bg-violet-500 transition-all text-white lg:font-semibold rounded-md shadow-md hover:bg-purple-500">
        Find out now
      </button>
    </Link>
  </div>
  
  <div className="profile lg:w-[32%] md:w-[30%] w-full text-center"> 
    <img className="sm:w-80 w-50 mx-auto mb-5 " src="./user.svg" alt="User Image" />
    <h2 className="text-white lg:text-3xl text-2xl font-bold">
      User Scraping
    </h2>
    <p className="text-gray-300 lg:text-base text-xs md:leading-8 text-center mt-2 md:tracking-widest">
      User scraping, often referred to as web scraping or data scraping, involves extracting data from websites by using automated tools or scripts. This process can be employed for a variety of purposes, such as gathering market research or collecting intelligence.
    </p>
    <Link href={"./userScrape"}>
      <button className="mt-3 lg:py-4 py-2 px-10 lg:px-16 bg-violet-500 transition-all text-white lg:font-semibold rounded-md shadow-md hover:bg-purple-500">
        Find out now
      </button>
    </Link>
  </div>
  
  <div className="company lg:w-[32%] md:w-[30%] w-full text-center"> 
    <img className="sm:w-80 w-50 mx-auto rounded-full" src="./company.svg" alt="Company Image" />
    <h2 className="lg:text-3xl text-2xl font-bold text-white">
      Company Scraping
    </h2>
    <p className="text-gray-300 lg:text-base text-xs md:leading-8 text-center mt-2 md:tracking-widest">
      Company scraping involves extracting data from company websites or online business directories to gather information such as contact details, and other relevant business metrics. This technique can be valuable for competitive analysis and lead generation.
    </p>
    <Link href={"./companyScrape"}>
      <button className="mt-3 lg:py-4 py-2 px-10 lg:px-16 bg-violet-500 transition-all text-white lg:font-semibold rounded-md shadow-md hover:bg-purple-500">
        Find out now
      </button>
    </Link>
  </div>
</div>


</div>

 

 

    <footer className="relative w-full text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
 
   </>
  
  );
}

export default App;

