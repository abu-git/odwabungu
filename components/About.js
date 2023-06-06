import React from 'react'

function About() {
  return (
    <div className='bg-white py-8'>
      <div name="about"></div>
        <h3 className='text-center text-2xl md:text-3xl font-bold underline decoration-4 underline-offset-8 mb-5'>About</h3>

        <section className='px-8 md:px-24 text-justify'>
            <p className='text-lg md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod pretium lectus, vel feugiat elit lacinia nec. Mauris diam massa, ornare vitae orci sit amet, convallis aliquam odio. Pellentesque quam turpis, sagittis vitae pellentesque sed, commodo a sem. Nam maximus elementum diam. Fusce nec scelerisque elit. Etiam gravida, nulla at pharetra aliquam, tellus augue porta nisi, in aliquam magna lectus non est. Phasellus aliquam lorem in purus luctus aliquam. Phasellus porta felis nec mattis accumsan. Etiam augue erat, interdum quis sapien sit amet, varius scelerisque libero. Integer lacinia dictum justo ut imperdiet. Pellentesque interdum pellentesque hendrerit. Duis hendrerit metus et eros scelerisque, quis auctor nunc luctus. Sed rhoncus purus at leo fringilla scelerisque. Etiam vitae urna felis. Cras congue erat non mauris maximus porttitor. Sed ac arcu pharetra, mollis nunc non, varius ante.
            </p>

            <p className='text-lg md:text-xl mt-10'>
            Phasellus tempor nec leo eget sagittis. Maecenas commodo nibh et nibh accumsan, eget luctus dolor faucibus. Proin egestas, mi quis iaculis euismod, lectus est placerat est, cursus finibus nulla libero id sem. Nulla eleifend magna risus, molestie pellentesque mi fermentum id. Morbi et sagittis ex, sagittis euismod sapien. Suspendisse molestie, tellus et elementum mattis, orci mi condimentum magna, vitae facilisis orci ante et tortor. Quisque efficitur hendrerit metus, sed accumsan ligula dictum quis. 
            </p>
        </section>
    </div>
  )
}

export default About