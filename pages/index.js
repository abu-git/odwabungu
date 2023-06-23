import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Landing from '@/components/Landing'
import Books from '@/components/Books'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Interview from '@/components/Interview'
import Whatsapp from '@/components/Whatsapp'


export default function Home() {
  return (
    <>
      <Head>
        <title>Odwa Bungu | Author and Publisher</title>
        <meta name="description" content="A digital portfolio of Odwa Bungu" />
        <meta property='og:title' content="Author and Publisher" />
        <meta property='og:description' content="A digital portfolio of Odwa Bungu" />
        <meta  property='og:image' itemProp="image" content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1686134510/meta_kykcqm.jpg'/>
        <meta  property='og:image:secure_url' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1686134510/meta_kykcqm.jpg'/>
        <meta property="og:url" content="https://odwabungu.vercel.app/" />
        <meta property="og:image:width" content="2024" />
        <meta property="og:image:height" content="1012" />
        <meta property="og:type" content="website" />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content="Author and Publisher" />
        <meta property='twitter:image' content='https://res.cloudinary.com/dbqn6vejg/image/upload/v1686134510/meta_kykcqm.jpg' />
        <meta name="twitter:creator" content="@reachmhp"/>
        <meta name="twitter:creator" content="@reachmhp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      <Landing />
      <Books />
      <About />
      <Interview />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  )
}
