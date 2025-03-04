import React from 'react'
import Image from 'next/image'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <main className='flex min-h-screen flex-col bg-black  mx-auto px-12 py-4 '>
            <div className=''>
                <div className='grid grid-cols-1 sm:grid-cols-12'>
                    <div className='col-span-7 place-self-center text-center sm:text-left'>
                        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Hello I'm Kreena</h1>
                        <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.</p>
                        <div>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-black'> Hire Me </button>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                        </div>
                    </div>
                    <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                            <Image src="/images/hero-image.webp" height={300} width={300} alt="" className='absolute transform -translate-x-1/2 -transform-y-1/2  left-1/2' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HeroSection;