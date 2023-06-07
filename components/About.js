import React from 'react'
import  ImageGallery  from 'react-image-gallery'

function About() {
  //slide array
  const images = [
    {
        original: "/slider1.png",
    },
    {
        original: "/slider2.png",
    },
    {
        original: "/slider3.png",
    },
    {
        original: "/slider4.png",
    },
    {
        original: "/slider5.png",
    }
  ]
  return (
    <div className='bg-white py-8'>
      <div name="about"></div>
        <h3 className='text-center text-2xl md:text-3xl font-bold underline decoration-4 underline-offset-8 mb-5'>About</h3>

        <section className='px-8 md:px-24 lg:px-80 text-justify'>
            <p className='text-lg md:text-xl'>
            Odwa Bungu is an Author and Publisher from Mdantsane in the Eastern Cape of South Africa. A Bachelor of Arts graduate from the University of the Western Cape specializing in Language and Communications / Anthropology, he has stayed active since. He is Director of a small publishing company called Afroglyphics Publishers and has launched three books under that umbrella all available on Amazon.
            </p>

            <div className='lg:px-36 py-5'>
              <ImageGallery
                items={images}
                infinite={true}
                showBullets={false}
                showPlayButton={false}
                showFullscreenButton={true}
                autoPlay={true}
                showNav={true}
                className="w-screen" 
              />
            </div>
            

            <p className='text-lg md:text-xl mt-10'>
            His recent book &apos;Knots in my Wording&apos; deals with the issues of stuttering and he draws inspiration from his personal experience as a young man. 
            </p>
        </section>
    </div>
  )
}

export default About