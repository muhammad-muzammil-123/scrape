
"use client";
import Link from "next/link";
import "./style.css";
import {Message,Space } from "antd";
import Image from "next/image";
import React, { useState } from 'react';
import { Typography } from "@material-tailwind/react";


export default function Dashboard(){
  const [searchKeyword, setSearchKeyword] = useState('')
  const [locationKeyword, setLocationKeyword] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRowExpansion = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for the specific row
    }));
  };
  
const dummydata = [
  {
      "job_data": {
          "title": "Python Developer (Blockchain Protocol Engineer)",
          "company": "TekScrum",
          "location": "Karāchi, Sindh, Pakistan",
          "application_status": "1 week ago",
          "time_posted": ""
      },
      "description": "Job Title: Rust Developer for Solana Smart Contract Development (Project-Based) Company: Eon Weave Labs Location: Remote Job Type: Project-Based Contract"
  },
  {
      "job_data": {
          "title": "Asset Integrity Engineer",
          "company": "Sui Southern Gas Company Limited",
          "location": "Karachi Division, Sindh, Pakistan",
          "application_status": "8 months ago",
          "time_posted": ""
      },
      "description": "BS/BE in Metallurgy/ Electrical/ Chemical/Mechanical. Candidates shall have minimum 2 Years’ experience of supervision of Cathodic Protection systems, Coating inspections, asset integrity inspections (Candidates with previous experience of Oil & Gas Sector would be preferred) Implement corrective action through corrosion personnel"
  },
  {
      "job_data": {
          "title": "Asset Integrity Engineer",
          "company": "Sui Southern Gas Company Limited",
          "location": "Karachi Division, Sindh, Pakistan",
          "application_status": "10 months ago",
          "time_posted": ""
      },
      "description": "Bachelor’s degree in Engineering (Metallurgy/Materials/ Mechanical) with at least 5 years of experience in Cathodic Protection designing and supervision of cathodic protection, coating inspections, asset integrity inspections with certification of TWI/AMPP/API. Experience in Oil and Gas Sector shall be preferred. Implement corrective action through corrosion personnel."
  },
  {
      "job_data": {
          "title": "Lead Engineer",
          "company": "Gaditek",
          "location": "Karāchi, Sindh, Pakistan",
          "application_status": "Be an early applicant",
          "time_posted": "1 month ago"
      },
      "description": "Company Overview At Gaditek, our talent is not just exceptional - it's world-class! Our unstoppable team of 800+ employees is the best and the brightest, driving innovation across 7 Global SaaS Brands in 6 hottest industries, including Cyber Security, Digital Media, Managed Cloud, Affiliate Marketing, E-Commerce, Web.3.0, and Venture Building as a Service. Our team is made up of dreamers, doers, and all-around rockstars who are committed to making a difference. As a result, we’re among the best companies to work for, with a plethora of benefits and an amazing culture. We are seeking a middleware layer for an automotive software stack based on a microkernel architecture that involves several key competencies. Middleware acts as the bridge between the lower-level OS services (provided by the microkernel and user space) and the higher-level functional applications. It plays a crucial role in ensuring smooth communication, data management, and service orchestration across the system. Here are the essential competencies to look for in individuals for middleware development in this context. Operating System Fundamentals Middleware Development Programming Languages Data Management Familiar with Automotive Industry Standards"
  },
  {
      "job_data": {
          "title": "Blockchain TTO",
          "company": "Ideofuzion",
          "location": "Karāchi, Sindh, Pakistan",
          "application_status": "Be an early applicant",
          "time_posted": "2 weeks ago"
      },
      "description": "The Blockchain TTO role at Ideofuzion is entry-level, tailored for recent graduates skilled in Solidity or Rust. Responsibilities include developing, implementing, and maintaining blockchain applications and smart contracts, collaborating with teams, and staying updated on industry trends."
  },
  {
      "job_data": {
          "title": "Asset Integrity Senior Engineer",
          "company": "Sui Southern Gas Company Limited",
          "location": "Karachi Division, Sindh, Pakistan",
          "application_status": "8 months ago",
          "time_posted": ""
      },
      "description": "BS/BE in Metallurgy/ Electrical/ Chemical/Mechanical. Candidates shall have minimum 4 Years’ experience of cathodic protection designing, supervision of Cathodic Protection systems, Coating inspections, asset integrity inspections. Well-balanced interpersonal skills and strong verbal and written communications skills. (Candidates with certification of TWI/NACE(AMPP)/API would be preferred) Implement corrective action through corrosion personnel"
  }
]
  

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
   
 
  


  
    


    return(
      <>
        <div className=" contain flex flex-col content-center w-full">
          <div className="section">

         
      
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
          job scraping
        </Link>
        <Link href="./userScrape"    className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
       user scraping
        </Link>
        <Link href="./companyScrape"      className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
  company scraping
        </Link>
       
        <Link href="/login"   className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
        Login
        </Link>
        <Link href="/signup"     className="block px-4 py-2 text-white transition-all hover:bg-gray-300">
       Signup
        </Link>
      </nav>
    </header>
</div>


<h1 className="md:text-5xl sm:text-3xl text-2xl text-white mt-20 text-center">Would you like to job scraping ?</h1>
<div className="md:mt-36 mt-20 text-center  text-base">
 
<input
        type="text"
       className="sm:px-32  px-16 outline-none rounded-md md:mb-0 mb-5  py-4"
      onChange={(event) => setSearchKeyword(event.target.value)}
        placeholder="Enter  Job Type"

      />
            <br />
            <br />

<input
        type="text"
       className="sm:px-32  px-16 outline-none rounded-md md:mb-0 mb-5  py-4"
       onChange={(event) => setLocationKeyword(event.target.value)}
        placeholder="Enter  Location"
      />
       <br />
       <br />
      <button   className="ml-6 sm:py-4 py-3 sm:px-16 px-10 bg-violet-500  transition-all text-white font-semibold  rounded-md shadow-md hover:bg-purple-500" >Scrape</button>
     </div>
     {/* <div className='  '>
                    {dummydata.map((elem, index) => (
                        <table key={index} className=' border table w-full table-fixed p-10'>
                          
                          <thead className="table-header-group ">
                          <tr className="table-row">
                            <th className='text-white table-cell '>title</th> 
                            <th className='text-white table-cell '>company</th>
                            <th className='text-white table-cell '>location </th>
                            <th className='text-white table-cell '>application status</th>
                            <th className='text-white table-cell '>timeposted</th>
                            <th className='text-white table-cell '>Description</th>
                            </tr>
                            </thead>
                            <tbody className="table-row-group">
                            <tr className="table-row">
                            <td className="table-cell text-gray-200 ">{elem?.job_data?.title}</td> 
                            <td className="table-cell text-gray-200 "> {elem?.job_data?.company}</td>
                            <td className="table-cell text-gray-200">{elem?.job_data?.location}</td>
                            <td className="table-cell text-gray-200">{elem?.job_data?.application_status}</td>
                            <td className="table-cell text-gray-200">{elem?.job_data?.time_posted}</td>
                            <td className=' table-cell  text-gray-200'>{elem?.description}</td>
                             </tr>
                             </tbody>
                           
                           
                            
                        </table>
                    ))}
                </div> */}
                <div className='p-10  '>
      {dummydata.map((elem, index) => {
        const isExpanded = expandedRows[index];

        return (
          <div key={index} className='overflow-x-auto table-style  p-4 mb-6 '>
            <table className='w-full  table-auto border-collapse border   border-gray-700 rounded-md'>
              <thead className='bg-gray-300'>
                <tr>
                  <th className='text-gray-900 px-4 py-2 border border-gray-700'>Title</th>
                  <th className='text-gray-900 px-4 py-2 border border-gray-700'>Company</th>
                  <th className='text-gray-900 px-4 py-2 border border-gray-700'>Location</th>
                  <th className='text-gray-900 px-4 py-2 border border-gray-700'>Application Status</th>
                  <th className='text-gray-900 px-4 py-2 border border-gray-700'>Time Posted</th>
                  <th className='text-gray-900 px-4 py-2 border border-gray-700'>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-gray-900'>
                  <td className='text-gray-200 px-4 py-2 border border-gray-700'>
                    {elem?.job_data?.title}
                  </td>
                  <td className='text-gray-200 px-4 py-2 border border-gray-700'>
                    {elem?.job_data?.company}
                  </td>
                  <td className='text-gray-200 px-4 py-2 border border-gray-700'>
                    {elem?.job_data?.location}
                  </td>
                  <td className='text-gray-200 px-4 py-2 border border-gray-700'>
                    {elem?.job_data?.application_status}
                  </td>
                  <td className='text-gray-200 px-4 py-2 border border-gray-700'>
                    {elem?.job_data?.time_posted}
                  </td>
                  <td className='text-gray-200 px-4 py-2 border border-gray-700'>
                    <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
                      <div className={`overflow-x-auto ${isExpanded ? '' : 'max-w-xs'}`}>
                        {isExpanded ? elem.description : elem.description.slice(0, 100) + '...'}
                      </div>
                      <button
                        className='text-blue-400 hover:underline ml-2'
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
          




<div className=" section-2  text-white text-center md:mt-36 mt-20">
<h2 className="md:text-5xl text-3xl ">
  hello, What's job scrape
</h2>
<p className="md:text-xl text-base mt-3  leading-10 tracking-widest">
Job scraping is the automated method of collecting job postings from different websites, including such information as a job title, job description, job openings, and other web data regarding job details.
</p>
<button  className="mt-5 mb-4 ml-6 py-4 px-5 bg-violet-500 transition-all text-white font-semibold rounded-md shadow-md hover:bg-purple-500">
  Let's go
</button>
</div>
{/* <img className="absolute top-20" src="https://cdn.autoscrape.com/static/autoscrape/images/asset-dark.e39c4ecf00e8.svg" /> */}
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
    )
}
