import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>

                    <div className='flex justify-center items-center gap-4 cursor-pointer'>
                        <a href='https://www.instagram.com' target='_blank'>
                            <FaInstagram size={28} className='hover:scale-120 hover:text-emerald-600' />
                        </a>

                        <a href="https://www.facebook.com" target='_blank'>
                            <FaFacebook size={24} className='hover:scale-120 hover:text-emerald-600' />
                        </a>

                        <a href="https://www.linkedin.com" target='_blank'>
                            <FaLinkedin size={24} className='hover:scale-120 hover:text-emerald-600' />
                        </a >
                        <a href="https://www.github.com" target='_blank'>
                            <FaGithub size={24} className='hover:scale-120 hover:text-emerald-600' /></a>
                    </div>

                    <div className=' flex flex-col justify-center items-center'>
                        <div className='mt-6 border-t border-[#05445E] w-80 p-3 text-center'>
                            <p>&copy; 2025 Faizan Ali. All Rights Reserved</p>
                        </div>

                    </div>


                </div>
            </footer>
        </>
    )


}

export default Footer