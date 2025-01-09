import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center mb-2 text-lg font-Ovo' >My Portfolio</h2>
            <h4 className='text-center text-5xl font-Ovo'>My latest work </h4>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my Web Development portfolio! Explore a collection of projects showcasing my expartise in front-end development.</p>



            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 '>
                {
                    workData.map((project, index) => (
                        <div key={index} style={{ backgroundImage: `url(${project.bgImage}` }}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        >
                            <div className=' bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5
                             flex items-center justify-between duration-500 group-hover:bottom-7'>

                                <div>
                                    <h2 className='font-semibold text-sm'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition '>
                                    <Image src={assets.send_icon} alt='' className='w-5' />
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>
            <Link href=""
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover  duration-500'
            >Show More <Image src={assets.right_arrow_bold} alt='Right arrow' /></Link>
        </div>
    )
}

export default Work