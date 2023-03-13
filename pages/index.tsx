import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-space-image bg-cover'>
        <div className='container mx-auto bg-black'>
          <div className='columns-2 md:columns-4'>
            <h1>Test</h1>
            <h1>Test 2</h1>
            <h1 className='hidden md:flex'>Test 3</h1>
            <h1 className='hidden md:flex'>Test 4</h1>
          </div>
        </div>
      </main>
    </>
  )
}
