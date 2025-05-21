import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.png'
import python from '../assets/python.jpg'
import Reactt from '../assets/Reactt.jpg'
import tailwindcss from '../assets/tailwindcss.jpg'
import nextjs from '../assets/nextjs.png'
function Experience() {
    const experience = [
        {
            id: 1,
            logo: html,
            name: "HTML",
        },

        {
            id: 2,
            logo: css,
            name: "CSS",

        },

        {
            id: 3,
            logo: js,
            name: 'JavaScript'
        },

        {
            id: 4,
            logo: python,
            name: 'Python'
        }
    ]


    
    const frameworks = [
        {
            id: 1,
            logo: Reactt,
            flname: "React",
        },

        {
            id: 2,
            logo: tailwindcss,
            flname: "TailwindCSS",

        },

        {
            id: 3,
            logo: nextjs,
            flname: 'Next.js'
        },

        {
            id: 4,
            logo: python,
            flname: 'Python'
        }
    ]   
     return (
        <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24'>
            {/* Languages Section */}
            <div className='flex flex-col items-center gap-2 mb-8 sm:mb-12'>
                <h2 className='text-2xl sm:text-3xl font-medium text-[#05445E]'>Experience in</h2>
                <hr className='w-24 h-1 bg-[#05445E] rounded-full' />
                {/* <p className='text-base sm:text-lg text-[#26272C] text-center mt-2'>Programming Languages</p> */}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 sm:mb-20'>
                {experience.map(({ id, logo, name }) => (
                    <div 
                        key={id} 
                        className='group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1'
                    >
                        <div className='relative h-48 sm:h-40 md:h-48 lg:h-52 overflow-hidden'>
                            <img 
                                src={logo} 
                                alt={name}
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' 
                            />
                            <div className='absolute inset-0 bg-[#05445E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                <span className='text-white text-lg md:text-xl font-medium tracking-wider'>{name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Frameworks Section */}
            <div className='flex flex-col items-center gap-2 mb-8 sm:mb-12'>
                <h2 className='text-2xl sm:text-3xl font-medium text-[#05445E]'>Frameworks and Libraries</h2>
                <hr className='w-24 h-1 bg-[#05445E] rounded-full' />
                {/* <p className='text-base sm:text-lg text-[#26272C] text-center mt-2'>Development Tools</p> */}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                {frameworks.map(({ id, logo, flname }) => (
                    <div 
                        key={id} 
                        className='group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1'
                    >
                        <div className='relative h-40 sm:h-36 md:h-44 lg:h-48 overflow-hidden'>
                            <img 
                                src={logo} 
                                alt={flname}
                                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' 
                            />
                            <div className='absolute inset-0 bg-[#05445E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                <span className='text-white text-lg md:text-xl font-medium tracking-wider'>{flname}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience