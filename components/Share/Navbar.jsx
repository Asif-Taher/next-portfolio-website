'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [isScroll, setIsScroll] = useState(false);


    // Using useEffect to scroll navbar

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(scrollY > 50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })

    },[])
    return (
        <div>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
        <div className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg duration-500 shadow-sm " : ""}`}>
                <Link href="#top">
                    <h2 className='text-2xl'><span className='text-green-400'>A</span>sif<span className='text-green-700'>  T</span>aher</h2>

                </Link>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-4 rounded-full '>
                    <li><Link className='font-Ovo' href="#top">Home</Link></li>
                    <li><Link className='font-Ovo' href="#about">About Me</Link></li>
                    <li><Link className='font-Ovo' href="#services">Services</Link></li>
                    <li><Link className='font-Ovo' href="#work">My Work</Link></li>
                    <li><Link className='font-Ovo' href="#contact">Contact Me</Link></li>
                </ul>

                <div>

                    <div className='flex items-center gap-4'>
                        <button>
                            <Image src={assets.moon_icon} alt='' className='w-6' />
                        </button>
                        <Link href="/" className='hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-500 rounded-full ml-4 font-Ovo'>
                            Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
                        </Link>

                        <button className='block md:hidden'>
                            <Image src={assets.menu_black} alt='' className='w-6' onClick={() => setVisible(true)} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}


            <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 bg-rose-50 transition duration-500 h-screen ${visible ? "translate-x-0 " : "translate-x-full"}`}>
                <div className='absolute top-6 right-6'>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' onClick={() => setVisible(false)} />
                </div>
                <li><Link className='font-Ovo' href="#top" onClick={() => setVisible("")}>Home</Link></li>
                <li><Link className='font-Ovo' href="#about" onClick={() => setVisible("")}>About Me</Link></li>
                <li><Link className='font-Ovo' href="#services" onClick={() => setVisible("")}>Services</Link></li>
                <li><Link className='font-Ovo' href="#work" onClick={() => setVisible("")}>My Work</Link></li>
                <li><Link className='font-Ovo' href="#contact" onClick={() => setVisible("")}>Contact Me</Link></li>
            </ul>
        </div>

    )
}

export default Navbar
