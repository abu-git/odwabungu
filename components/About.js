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
            Odwa Bungu is an Author / Poet/ Director of a Publishing Company and Artist who hails from Mdantsane; Eastern Cape: South Africa. He was born on the 5th of March 1992 in Frere Hospital which is one of the Greatest Hospitals in the Eastern Cape. At the age of 7 Odwa Bungu started writing short stories/ Plays and Poetry after being inspired by his grade 1 teacher Mrs Hendrix at St Johns Road Primary School in East London. Due to lack of opportunities in the Townships he couldn&apos;t publish his stories. In 2018 He got his first break as a publisher; publishing his first book titled &apos;To tame a loving Heart&apos; which was an EBook. Later that year he decided to unpublish the book and re-edit it for later use. In 2021 He published his first Poetry book titled &apos;Diluted&apos; and in 2022 He published his second Book titled Doubtless. In 2023 he recently published a book titled: &apos;Knots in my Wording&apos;. 
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
            Afroglyphics Publisher&apos;s is a publishing company that aims to publish, market and exhibit African Art with a vision of Narrating African stories through the view of African people.  It was established in 2018 on the 4th of April at Mdantsane. It publishes Paintings, Books, Music, Films and other forms of Art. Odwa Bungu is a Director at Afroglyphics Publishers.
            </p>
        </section>
    </div>
  )
}

export default About