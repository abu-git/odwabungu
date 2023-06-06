import React from 'react'

function Contact() {
  return (
    <div className='bg-sky-50 py-9'>
        <h3 className='text-center text-2xl md:text-3xl font-bold underline decoration-4 underline-offset-8 mb-7'>Contact</h3>
        <div className='px-10 grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center content-center'>
            <section className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <h4 className='text-lg font-bold md:text-xl'>Phone:</h4>
                    <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>0789690660</h3>
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <h4 className='text-lg md:text-xl font-bold'>Alt Phone:</h4>
                    <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>0730413695</h3>
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <h4 className='text-lg md:text-xl font-bold'>Email:</h4>
                    <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>odwa.bungu1@gmail.com</h3>
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <h4 className='text-lg md:text-xl font-bold'>Alt Email:</h4>
                    <h3 className='text-xl md:text-2xl font-light font-sans ml-2'>3165478@myuwc.ac.za</h3>
                </div>
            </section>


            <div>
                <h3 className='text-xl md:text-2xl mt-3 mb-12 text-center'>You can also send me a message directly</h3>
                <div className='flex justify-center'>
                    
                    <form className='w-fit text-lg'>
                        <input type='text' placeholder='Your Name' className='appearance-none bg-transparent border-b-2 border-gray-400 w-full focus:outline-none focus:border-gray-800 mb-8' />

                        <input type='text' placeholder='Your Email' className='appearance-none bg-transparent border-b-2 border-gray-400 w-full focus:outline-none focus:border-gray-800 mb-8' />

                        <textarea type='text' placeholder='Your Message' rows={6} className='appearance-none bg-transparent border-b-2 border-gray-400 w-full focus:outline-none focus:border-gray-800 mb-8' />

                        <div className='flex justify-center'>
                        <button className='text-white border-2 bg-sky-700 rounded-3xl py-1 px-3 mx-4 hover:bg-sky-900 hover:border-amber-400'>
                            Send Message
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact