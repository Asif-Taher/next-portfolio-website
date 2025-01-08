import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>
            <h2 className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>Hi! It's Me Asif Taher
                <Image src={assets.hand_icon} alt='' className='w-6' /></h2>
            <h3 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Front-end web developer</h3>
            <p className='max-w-2xl mx-auto font-Ovo'>I am a front-end developer in Bangladesh. I have 3 years experience in frontend development</p>

            <div className='flex flex-col items-center sm:flex-row gap-4 mt-4'>
                <Link href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 '>Contact Me <Image src={assets.right_arrow} alt='' className='w-4'/></Link>
                <Link href="/asif-taher.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 '>My Resume 
                <Image src={assets.download_icon} alt='' className='w-4'/></Link>
            </div>
        </div>
    )
}
