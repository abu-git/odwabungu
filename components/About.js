import React from 'react'

function About() {
  return (
    <div className='bg-white py-8'>
      <div name="about"></div>
        <h3 className='text-center text-2xl md:text-3xl font-bold underline decoration-4 underline-offset-8 mb-5'>About</h3>

        <section className='px-8 md:px-24 lg:px-80 text-justify'>
            <p className='text-lg md:text-xl'>
            Odwa Bungu is an Author and Publisher from Mdantsane in the Eastern Cape of South Africa. A Bachelor of Arts graduate from the University of the Western Cape specializing in Language and Communications / Anthropology, he has stayed active since. He is Director of a small publishing company called Afroglyphics Publishers and has launched three books under that umbrella all available on Amazon.
            </p>

            <p className='text-lg md:text-xl mt-10'>
            His recent book 'Knots in my Wording' deals with the issues of stuttering and he draws inspiration from his personal experience as a young man. 
            </p>
        </section>
    </div>
  )
}

export default About