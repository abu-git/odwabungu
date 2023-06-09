import React, { useState } from 'react'
import Image from 'next/image'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Navigation() {
    //sidebar state
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className='px-10 py-5 rounded shadow-md bg-sky-50 text-black fixed top-0 z-10 w-full'>
            {/* Large Screen Navigation */}
            <nav className='flex justify-between items-center'>
                <Link to='home' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                    <div className='flex items-center cursor-pointer'>
                        <div className='ripple-nav'>
                            <Image 
                                src='/odwaMeta.png'
                                width={27}
                                height={27}
                                alt='Odwa Bungu Logo'
                            />
                        </div>
                        <h4 className='ml-2 font-extrabold text-[21px]'>Odwa Bungu</h4>
                    </div>
                </Link>

                <ul className='hidden lg:flex justify-between items-center w-2/3 text-2xl'>
                    <Link to='home' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    <Link to='books' spy={true} smooth={true} offset={-80} duration={500} delay={500}>
                        <li className='cursor-pointer'>Books</li>
                    </Link>
                    <Link to='about' spy={true} smooth={true} offset={-80} duration={500} delay={500}>
                        <li className='cursor-pointer'>About</li>
                    </Link>
                    <Link to='interview' spy={true} smooth={true} offset={-80} duration={500} delay={500}>
                        <li className='cursor-pointer'>Interview</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={-80} duration={500} delay={500}>
                        <li className='cursor-pointer'>Contact</li>
                    </Link>
                    
                </ul>

                <button onClick={() => setShowSideBar(!showSideBar)} className='lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </nav>

            {/* Smaller devices SideBar Navigation */}
            <div className={`top-0 right-0 w-[380px] bg-sky-800 text-white p-10 pl-20 fixed h-full z-40 ease-in-out duration-300 ${showSideBar ? "translate-x-0" : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSideBar(!showSideBar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className='text-center py-9 text-2xl'>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='home' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                            <li className='py-3'>Home</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='books' spy={true} smooth={true} offset={-90} duration={500} delay={500}>
                            <li className='py-3'>Books</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='about' spy={true} smooth={true} offset={-90} duration={500} delay={500}>
                            <li className='py-3'>About</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='interview' spy={true} smooth={true} offset={-90} duration={500} delay={500}>
                            <li className='py-3'>Interview</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='contact' spy={true} smooth={true} offset={-90} duration={500} delay={500}>
                            <li className='py-3'>Contact</li>
                        </Link>
                        
                    </ul>
                </nav>
            </div>
        </div>
  )
}

export default Navigation