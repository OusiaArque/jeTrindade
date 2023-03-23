import styles from '@/styles/components/Video/Video.module.css'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
export default function Video() {

  return (
    <>    
        <section className={styles.VideoMain} id="Video">
            <img className={styles.videoBG} src="https://baldoo.com.br/API/imageAPI/jessica/redondo.webp" alt="" />
            <div className={styles.VideoMainContainer}>
                <h2><span>TWERK ACADEMY É </span>REFERÊNCIA.</h2>
                <iframe  src="https://www.youtube.com/embed/bNHJHGbmCzw?controls=0&amp;start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
            </div>
        </section>
        <section className={styles.MainConvertVideo}>
            <div className={styles.MainConvertVideoContainer}>
                <Link href="/FormCurso">
                    <h2><span>CURSO DE TWERK</span>  GRATUITO!</h2>
                </Link>                
            </div>
        </section>
    </>
  )
}
