import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import {Link} from 'react-scroll'


function Navbar() {
    const [menu, setmenu] = useState(false)

    const Navitems = [
        { id: 1, title: "Home" },
        { id: 2, title: 'About' },
        { id: 3, title: "Projects" },
        { id: 4, title: "Contact" },
    

    ]


    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-lg rounded-sm bg-[#5f77be] fixed top-0 left-0 z-50'>
            <div className='flex justify-between items-center h-16 cursor-pointer'>
                <div className='flex '>
                    <img className='h-20 w-20 ' src="https://cdn.dribbble.com/userupload/41511974/file/original-997f601b7e72c59064a2d3e26f542ffa.png?resize=752x&vertical=center" alt="" />
                    <h1 className='m-4 font-semibold text-xl'>Faiza<span className='text-green-500 text-xl font-semibold'>n</span> <p className='font-semibold text-lg'>Web Developer</p></h1>
                </div>
                {/* Desktop Navbar */}
                <div>
                    <ul className='hidden md:flex gap-10 cursor-pointer  '>
                        {Navitems.map(({ id, title }) => (
                            <li key={id} className='hover:text-green-500 transition-all duration-300'>
                                  
                           <Link to={title} duration={500} smooth={true} offset={-70} activeClass='active' >
                               {title}
                           </Link>
                            
                          

                            </li>
                        ))}
                    </ul>
                    <div className='md:hidden' onClick={() => setmenu(!menu)}>{menu ? <ImCross size={24} /> : <MdMenu size={24} />}</div>
                </div>
            </div>            {/* Mobile Navbar */}
            <div className={`fixed inset-0 bg-[#5f77be] md:hidden transform transition-transform duration-300 ease-in-out ${menu ? 'translate-y-0' : '-translate-y-full'}`}>
                <ul className='flex flex-col justify-center items-center h-screen text-white'>
                    <div className='absolute top-4 right-4 text-white' onClick={() => setmenu(!menu)}>
                        <ImCross size={24} />
                    </div>
                    {Navitems.map(({ id, title }) => (                        <li key={id} className='my-6'>
                            <Link 
                                onClick={() => setmenu(false)}
                                to={title} 
                                duration={500} 
                                smooth={true} 
                                offset={-70} 
                                className='text-2xl font-medium hover:text-green-500 transition-all duration-300'
                                activeClass='text-green-500'
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navbar