import React from 'react'
import mdb from '../assets/mdb.png'
import Nodejs from '../assets/Nodejs.jpg'
import expo from '../assets/expo.png'
import Reactt from '../assets/Reactt.jpg'

function Portfolio() {
    const names = [
        {
            id: 4,
            logo: Nodejs,
            name: "Nodejs"
        },
        {
            id: 3,
            logo: Reactt,
            name: "Reactjs"
        },
        {
            id: 1,
            logo: mdb,
            name: "Mongodb"
        },
        {
            id: 2,
            logo: expo,
            name: "Expressjs"
        }
    ]

    return (
        <div name='Project' className='max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-20 py-8 md:py-12 lg:py-20'>
            <div className='flex flex-col items-center gap-2 mb-6'>
                <h1 className='text-3xl font-medium text-[#05445E]'>Projects</h1>
                <hr className='w-24 h-1 bg-[#05445E] rounded-full' />
                {/* <span className='text-lg font-light mt-2'>Featured Projects</span> */}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer'>
                {names.map(({id, logo, name}) => (
                    <div key={id} className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105'>
                        <img src={logo} alt={name} className='w-full h-48 object-cover' />
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold text-[#05445E] mb-2'>{name}</h1>
                            {/* <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi tempora sapiente.</p> */}
                        </div>
                        <div className='flex gap-4 p-4 border-t '>
                            <button className='flex-1 cursor-pointer bg-[#189AB4] text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300'>Visit</button>
                            <button className='flex-1 cursor-pointer border border-[#05445E] text-green-600 py-2 px-4 rounded-md hover:bg-purple-50 transition-colors duration-300'>Source Code</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio