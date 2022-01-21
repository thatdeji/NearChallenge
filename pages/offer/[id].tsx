import type { NextPage } from 'next'
import {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import Container from '../../layouts/Container'
import Topbar from '../../layouts/Topbar'
import Overview from '../../components/Overview'
import Notification from '../../components/Notification'
import MessageTrade from '../../components/MessageTrade'
import MessageOffer from '../../components/MessageOffers'
import style from '../../styles/Offer.module.css'

const Offer: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Offer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
          <div>
          <Topbar />
          <div className={style.showcase}>
            <Image src="/nft.png" width='157' height='147' alt='' />
          </div>
          <main className="px-6">
            <h2 className='heading heading--3 mt-4 text-black'>Digital Ninja</h2>
            <p className='text-sm font-medium leading-5 not-italic text-accent-100 mt-2'>#72873</p>
            <div className='flex items-center mt-3'>
              <Image src='/offername.svg' width='26' height='26' alt='' />
              <p className='heading heading--1 text-gray-100 ml-2'>Johndoe.near</p>
            </div>
            <Tab.Group as='div' className='w-full mt-6'>
              <Tab.List className='flex justify-between w-screen -mx-6 border-b-1 border-gray-500'>
                <Tab className={({ selected }) => selected ? 'text-sm font-semibold text-gray-100 text-center w-1/2 border-gray-100 border-b-2 pb-3' : 'text-gray-300 text-sm text-center w-1/2 pb-4  font-semibold'}>
                  Info
                </Tab>
                <Tab className={({ selected }) => selected ? 'text-sm font-semibold text-gray-100 text-center w-1/2 border-gray-100 border-b-2 pb-3' : 'text-gray-300 text-sm text-center w-1/2 pb-4  font-semibold'}>
                  Pending Offers
                </Tab>
                <Tab className={({ selected }) => selected ? 'text-sm font-semibold text-gray-100 text-center w-1/2 border-gray-100 border-b-2 pb-3' : 'text-gray-300 text-sm text-center w-1/2 pb-4  font-semibold'}>
                  Trade History
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Overview content='digital ninjas are a collection of 1000 unique collectibles on the NEAR blockchain that serve to honor and preserve art.' />
                </Tab.Panel>
                <Tab.Panel>
                  <p className='flex items-start mt-5'> 
                    <span className='font-sm text-gray-300 font-medium'>2 active offer</span>
                  </p>
                  <Notification src='/message2.svg'>
                    <MessageOffer name='CryptoKing.near' offer='0.345 NEAR' time='5 days ago'/>
                  </Notification>
                  <Notification src='/message1.svg'>
                    <MessageOffer name='CryptoKing.near' offer='0.345 NEAR' time='5 days ago'/>
                  </Notification>
                </Tab.Panel>
                <Tab.Panel as='div' className='mt-4'>
                  <Notification src='/message1.svg'>
                    <MessageTrade type='trade' buyer='johndoe.near' seller='ninjaking.near' number='#72873' time='2 months ago' />
                  </Notification>
                  <Notification src='/message1.svg'>
                    <MessageTrade type='trade' buyer='ninja.near' seller='johndoe.near' number='#72873' time='3 months ago' />
                  </Notification>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </main>
        </div>
      </Container>
    </div>
  )
}

export default Offer