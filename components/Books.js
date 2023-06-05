import React from 'react'
import Image from 'next/image'

function Books() {
  return (
    <main className='bg-sky-50 py-10'>
        
        <div className='py-9 grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center px-10'>
            {/* Book component */}
            <div className='bg-white w-[230px] h-[420px] shadow-md rounded-md flex justify-center items-start overflow-hidden'>
                <Image src="/diluted.jpg" alt="Diluted by Odwa Bungu" width={230} height={420} />
            </div>

            <div className='bg-white w-[230px] h-[420px] shadow-md rounded-md flex justify-center items-start overflow-hidden'>
                <Image src="/doubtless.png" alt="Doubtless by Odwa Bungu" width={230} height={420}/>
            </div>

            <div className='bg-white w-[230px] h-[420px] shadow-md rounded-md flex justify-center items-start overflow-hidden'>
                <Image src="/knots.jpg" alt="Knots in my Wording by Odwa Bungu" width={230} height={420}/>
            </div>
        </div>
    </main>
    
  )
}

export default Books