import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";


function Home() {
    return (
        <div className='max-w-screen-2xl container  mx-auto px-4 md:px-12 lg:px-20 py-8 md:py-12 lg:py-20'>
            <div className='flex flex-col md:flex-row  text-justify items-center gap-8 md:gap-12'>
                {/* Left Section */}
                <div className='w-full md:w-3/5 space-y-6 order-2 md:order-1'>                    <span className='text-xl md:text-2xl font-medium block'>Welcome to My Portfolio</span>
                    <div className='flex flex-nowrap items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap overflow-x-hidden'>
                        <h1>Hello, I'm a</h1>
                        <ReactTyped
                            strings={["Web Developer", "Frontend Developer", "Backend Developer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                            className='text-blue-900 font-bold inline-block' />
                    </div>
                    <p className='text-base md:text-lg leading-relaxed'>
                        Hi, I'm <span className='text-lg md:text-xl font-semibold px-2 text-blue-700'>Faizan Ali</span>
                        A passionate web developer who turns ideas into functional, elegant digital experiences. I specialize in React, Node.js and responsive design and love building solutions that make an impact. Let's create something amazing together.
                    </p>

                    {/* Social and Tech Stack Section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 '>
                        {/* Social Links */}
                        <div>
                            <h2 className='font-medium text-lg md:text-xl mb-4'>Available On</h2>
                            <ul className='flex flex-wrap gap-4'>
                                <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
                                    <li><FaGithub className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                                </a>

                                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                    <li><FaLinkedin className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>

                                </a>

                                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                    <li><FaInstagram className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                                </a>

                                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                    <li><FaFacebook className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                                </a>
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h2 className='font-medium text-lg md:text-xl mb-4'>Currently Working On</h2>
                            <ul className='flex flex-wrap gap-4'>
                                <li><FaReact className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                                <li><SiMongodb className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                                <li><SiExpress className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                                <li><FaNodeJs className='w-6 h-6 md:w-7 md:h-7 text-gray-900 hover:text-blue-900 transition-all duration-300 cursor-pointer' /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className='w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2'>
                    <img
                        className='w-60 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg'
                        src="https://images.unsplash.com/photo-1659353222273-95d67009f712?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Profile"
                    />
                </div>
            </div>
            <hr className='m-6' />
        </div>
    )
}

export default Home