import React, { useState } from 'react'

function Navigation() {
    //sidebar state
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <div className='px-10 py-5 rounded shadow-md bg-sky-50 text-black fixed top-0 z-10 w-full'>
            {/* Large Screen Navigation */}
            <nav className='flex justify-between items-center'>
                {/* home image */}
                <h4 className='text-2xl font-bold'>Odwa Bungu</h4>

                <ul className='hidden lg:flex justify-between items-center w-2/3 text-2xl'>
                    <li>Books</li>
                    <li>About</li>
                    <li>Interviews</li>
                    <li>Contact</li>
                </ul>

                <button onClick={() => setShowSideBar(!showSideBar)} className='lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </nav>

            {/* Smaller devices SideBar Navigation */}
            <div className={`top-0 right-0 w-[380px] bg-sky-800 text-white dark:bg-teal-900 dark:text-white p-10 pl-20 fixed h-full z-40 ease-in-out duration-300 ${showSideBar ? "translate-x-0" : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSideBar(!showSideBar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className='text-center py-9 text-2xl'>
                        <li className='py-3'>Books</li>
                        <li className='py-3'>About</li>
                        <li className='py-3'>Interviews</li>
                        <li className='py-3'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
  )
}

export default Navigation