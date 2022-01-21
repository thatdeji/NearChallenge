import type { NextPage } from 'next'
import {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Container from '../../layouts/Container'
import Topbar from '../../layouts/Topbar'
import Overview from '../../components/Overview'
import Message from '../../components/Message'

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
          <div style={{backgroundColor: '#E5D0FF'}} className='h-14 mt-20'></div>
          <main className="px-6">
            <div className='flex justify-between'>
              <div className='-mt-7'>
                <Image src='/Docu.png' width='69' height='69' alt='' />
              </div>
              <div className='flex items-center'>
                <Image src='/share.svg' width='18' height='18' alt='' />
                <span className='text-12px font-medium leading-5 not-italic text-blue-100 ml-2'>Share</span>
              </div>
            </div>
            <h2 className='heading heading--2 mt-3'>Docu sign</h2>
            <p className='text-gray-300 text-sm leading-4 not-italic mt-1'>sign smart contracts seamlessly</p>
            <p className='text-sm font-medium leading-5.5 not-italic text-blue-100 mt-2'>Utilities</p>
            <div className='flex items-center mt-4'>
              <button className='btn btn-gray-200 flex mr-3'>
                <span className='mr-4'>Open</span>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9849 9.414L8.37793 18.021L6.96393 16.607L15.5699 8H7.98493V6H18.9849V17H16.9849V9.414Z" fill="white"/>
                </svg>
              </button>
              <Image src='/users.svg' width='16' height='16' alt='' />
              <p className='text-gray-300 text-sm leading-5.5 not-italic ml-2'>24,000+ users</p>
            </div>
            <Tab.Group as='div' className='w-full mt-6'>
              <Tab.List className='flex justify-between w-screen -mx-6'>
                <Tab className={({ selected }) => selected ? 'text-base font-semibold text-gray-100 text-center w-1/2 border-gray-100 border-b-2 pb-3' : 'text-gray-300 text-base text-center w-1/2 pb-4'}>
                  Details
                </Tab>
                <Tab className={({ selected }) => selected ? 'text-base font-semibold text-gray-100 text-center w-1/2 border-gray-100 border-b-2 pb-3' : 'text-gray-300 text-base text-center w-1/2 pb-4'}>
                  Activities
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Overview content='it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly.' />
                  <div className='flex mt-6'>
                    <Image src='/world.svg' width='22' height='22' alt=''/>
                    <Link href='https://docusignn.io'>
                      <a target='_blank' className='text-sm font-medium leading-5.5 not-italic text-blue-100 ml-4'>https://docusignn.io</a>
                    </Link>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <p className='flex justify-center items-center flex-center mt-5'> 
                    <span className='bg-gray-700 py-1 px-2 inline-block rounded-2xl font-12px text-gray-300 font-medium'>12 activity found</span>
                  </p>
                  <Message src='/message1.svg' name='johndoe.near' message='signed the contract successfully' time='2 days ago' />
                  <Message src='/message2.svg' name='CryptoKing.near' message='requested to sign the contract' time='2 days ago' />
                  <Message src='/message2.svg' name='maxwell.near' message='requested to sign the contract' time='2 days ago' />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </main>
        </div>
      </Container>
    </div>
  )
}

export default Experience
