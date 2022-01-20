import type { NextPage } from 'next'
import {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../../layouts/Container'
import Topbar from '../../layouts/Topbar'

const Experience: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Experience</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
          <div>
          <Topbar />
          <main className="px-6">
          </main>
        </div>
      </Container>
    </div>
  )
}

export default Experience
