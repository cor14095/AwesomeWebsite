import Head from 'next/head'
import Planets from "../components/Planets"
import About from "../components/About"
import Experience from "../components/Experience"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Page</title>
        <meta name="description" content="Project page for NextJs + Tailwind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id='main' className='bg-space-image bg-cover bg-fixed w-screen h-full max-w-full'>

        <div className='fixed top-0 left-0 w-screen h-screen bg-avatar-blue/10
         blur-xl animate-slow-pulse z-10' />

        <Planets />

        <About />

        <Experience />
        
        <Footer />
      </main>
    </>
  )
}
