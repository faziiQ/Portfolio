import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Contact() {    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
       const userinfo ={
        Fname : data.firstName,
        sname : data.lastName,
        email : data.email,
        message : data.message

       }
       try {
         await axios.post('https://getform.io/f/bpjpmegb', userinfo)
        toast.success('Message sent successfully')
       } catch (error) {
        toast.error('Error sending message')
       }
    }

    return (

        <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-20 py-6 md:py-8 lg:py-12'>
            <div className='flex flex-col items-center gap-2 mb-6'>
                <h1 className='text-2xl md:text-2xl font-medium text-[#05445E]'>Contact Me</h1>
                <hr className='w-24 h-1 bg-[#05445E] rounded-full' />
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto'>
                <div className='w-full md:w-[550px] bg-white rounded-lg shadow-lg p-4 md:p-6'>
                    <form onSubmit={handleSubmit(onSubmit)}
                        // action={'https://getform.io/f/bpjpmegb'}
                        // method='POST'
                        className='space-y-4'>
                        <h2 className='text-lg font-semibold text-gray-800 mb-4'>Send Your Message</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-black'>
                            {/* First Name */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>
                                    First Name
                                </label>                                <input  
                                    {...register("firstName", { 
                                        required: "First name is required" 
                                    })}
                                    type="text"
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#05445E] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
                                    placeholder='Faizan'
                                />
                                {errors.firstName && 
                                    <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>
                                }
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>
                                    Last Name
                                </label>
                                <input 
                                    {...register("lastName", { 
                                        required: "Last name is required" 
                                    })}
                                    type="text"
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#05445E] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
                                    placeholder='Ali'
                                />

                            </div>
                            {/* {errors.Secondname && <span>This field is required</span>} */}

                            {/* Email */}
                            <div className='md:col-span-2'>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>
                                    Email Address
                                </label>                                <input
                                    {...register("email", { 
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    className='w-full px-3 py-1 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#05445E] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
                                    placeholder='faizan@gmail.com'
                                />
                                {errors.email && 
                                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                                }
                            </div>

                            {/* Message */}
                            <div className='md:col-span-2'>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>
                                    Message
                                </label>
                                <textarea  
                                    {...register("message", { 
                                        required: "Message is required",
                                        minLength: {
                                            value: 10,
                                            message: "Message must be at least 10 characters long"
                                        }
                                    })}
                                    rows="3"
                                    className='w-full px-3 py-1 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#05445E] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 resize-none'
                                    placeholder='Your message here...'
                                ></textarea>
                                {errors.message && <span>This field is required</span>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className='w-full cursor-pointer bg-[#189AB4] text-white py-2 px-4 rounded-md hover:bg-[#05445E] transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#05445E] mt-2'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
