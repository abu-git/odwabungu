import React from 'react'

function Footer() {
  return (
    <div className='bg-sky-50 px-9 py-11'>
        <div className='flex justify-center py-8'>
            <a href='https://za.linkedin.com/in/odwa-bungu-05769bb5' target='_blank' rel='noreferrer'>
                <svg className='w-7 h-7 hover:w-6 hover:h-6' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            
            <a href='https://www.facebook.com/AuthorOBungu' target='_blank' rel='noreferrer'>
                <svg className='w-7 h-7 ml-3 hover:w-6 hover:h-6' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            
        </div>

        <div className='flex justify-center mt-10'>
            <a href='https://sam-cv.vercel.app' target='_blank' rel='noreferrer'>
                <h4 className='text-lg'>©2023 Design by <span className='text-amber-900'>Samuel Abu</span></h4>
            </a>
        </div>
    </div>
  )
}

export default Footer