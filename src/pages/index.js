import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/Navbar'

import Main from '../../components/Main'
import Professora from '../../components/Professora'
import Modulos from '../../components/Modulos'
import Video from '../../components/Video'
import Destrave from '../../components/Destrave'
import Duvidas from '../../components/Duvidas'
import Sobre from '../../components/Sobre'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react'


export default function Home() {
 useEffect(() => {
    console.log("Referrer:", document.referrer);
  }, []);
  return (
    <>
      <Head>
        <title>Twerk Academy com Jé Trindade - Curso de Twerk Gratuito</title>
        <meta name="referrer" content="no-referrer-when-downgrade"/>
        <meta name="keywords" content="professoras, twerk, dança, brasil, criação, vídeos, especializou, alunos, saia, sedentarismo, capacidade muscular, aprender, quadril solto, movimentações, principais, isolamentos, consciência corporal, fluida, intenção, amplitude, dançar, passar, conhecimentos, experiência, dinamicidade, vitalício, conteúdos, contato, alunos, gravadas, enviadas, e-mail, praticarem, rolê, gratuito, Twerk Academy, aulas, Jé Trindade"/>
        <meta name="description" content="Aprenda o melhor do twerk com a expert Jé Trindade nesse curso 100% gratuito. Bora soltar esse quadril e aprender uma dança nova. Cadastre-se aqui." />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
        <link rel="icon" href="jeTrindade/favicon.ico" />
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="author" content="Grupo Ousía Arqué, Arqué lab, Amply"></meta>
      </Head>
      <Navbar/>
      <Main/>
      <Professora/>
      <Destrave/>
      <Sobre/>
      <Modulos/>
      <Video/>
      <Duvidas/>
      
      <Footer/>
   
    </>
  )
}
