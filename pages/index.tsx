import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className="bg-purple-500 w-full min-h-screen">
        </main>
      </Container>
    </div>
  )
}

export default Home
