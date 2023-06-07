import React from 'react'
import Image from 'next/image'

function Landing() {
  return (
    <>
      <div name="home"></div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-16 px-10 pb-9 bg-white'>
        <div className='flex justify-center items-center h-96'>
            <Image src='/odwaLanding.jpg' alt='Odwa Bungu' width={240} height={240} className='rounded-full' />
        </div>
        
        <div className='md:px-10'>
            <h2 className='font-extrabold text-4xl md:text-5xl text-center text-black'>Odwa Bungu</h2>
            <h4 className='pt-5 text-center text-2xl font-light'>Author and Publisher</h4>
        </div>
      </div>
    </>
    
  )
}

export default Landing