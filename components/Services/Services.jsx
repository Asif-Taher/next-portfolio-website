import { assets, serviceData } from '@/assets/assets'
import { Sevillana } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center mb-2 text-lg font-Ovo' >What i offer</h2>
      <h4 className='text-center text-5xl font-Ovo'>My Services </h4>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias repellendus quisquam cumque laboriosam dignissimos quasi quaerat ut aliquam aperiam esse.</p>


        {/* maping serviceData here */}

        <div className='grid grid-cols-1 gap-6 my-10 lg:grid-cols-4 md:grid-cols-2'>
          {
            serviceData.map((service, index) => (
              <div key={index}
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
              duration-500'
              >
                <Image src={service.icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 '>{service.title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{service.description}</p>

                <Link href="" className='flex items-center gap-2 text-sm mt-5'>Read More <Image src={assets.right_arrow} alt='' className='w-4'/></Link>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Services
