import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Professora from '../../components/Professora'
import Modulos from '../../components/Modulos'
import Destrave from '../../components/Destrave'
import Duvidas from '../../components/Duvidas'
import Sobre from '../../components/Sobre'
import Footer from '../../components/Footer'
const inter = Inter({ subsets: ['latin'] })
import { useEffect } from 'react'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <Professora/>
      <Destrave/>
      <Sobre/>
      <Modulos/>
      <Duvidas/>
      
      <Footer/>
    </>
  )
}
