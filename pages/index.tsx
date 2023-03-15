import Head from 'next/head'
import Nav from "../components/Nav"
import Planets from "../components/Planets"

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Page</title>
        <meta name="description" content="Project page for NextJs + Tailwind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex bg-space-image bg-cover bg-fixed h-mh w-full'>

        <div className='fixed top-0 left-0 w-full h-full bg-avatar-blue/10
         blur-xl animate-slow-pulse z-10' />

        <Nav />

        <Planets />
        
      </main>
    </>
  )
}
