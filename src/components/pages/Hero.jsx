import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className='flex flex-col items-center mx-6 md:mx-32 lg:mx-52 gap-2 md:gap-6 lg:gap-9'>
            <h1
                className='font-extrabold text-green-300 text-[25px] md:text-[45px] lg:text-[60px] text-center mt-14'>
                Discover the Beauty of the World with AI.
            </h1>

            <p className='text-purple-100 text-xl text-center my-4 lg:my-0 lg:w-1/2'>
                Explore breathtaking destinations, plan your perfect trip, and create unforgettable memories with our AI-powered tour guide.
            </p>

            <button onClick={() => navigate("/plan-trip")} className='bg-green-400 text-purple-900 font-bold my-2 px-6 py-2 rounded-lg hover:bg-green-500 transition duration-300'>
                Get Started
            </button>
        </section>
    )
}

export default Hero