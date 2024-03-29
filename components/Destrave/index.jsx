import styles from '@/styles/components/Destrave/Destrave.module.css'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "animate.css"



const useCount = () => {
  const [count, setCount] = useState(1000);
  const [startInterval, setStartInterval] = useState(false);

  useEffect(() => {
    if (!startInterval) return;

    const intervalId = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 1500) {
          clearInterval(intervalId);
          return 1500;
        }
        return prevCount + 2;
      });
    }, -5);

    return () => clearInterval(intervalId);
  }, [startInterval]);

  return [count, setStartInterval];
  };

export default function Destrave() {



  const elementRef = useRef(null);
  useEffect(() => {
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStartInterval(true)
          console.log("entrou")
        } else {
          setStartInterval(false)
          console.log("saiu")
        }
      });
    });
    
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  
  }, []);




  const [count, setStartInterval] = useCount();
 
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(
      () =>{
          window.scrollTo(0,0)
      },
      [pathname]
  
    );
    return null;
  
  }

  return (
    <>
        <section  className={styles.DestraveSectionMain}>
            <div className={styles.DestraveSectionMainContainer}>
                <h5 ref={elementRef} id="Contadorhere" className={styles.Contadorhere}>+ {count}</h5>
                <h4>ALUNXS APRENDERAM <span>TWERK</span> COM A</h4>
                <h3>Jé Trindade</h3>
            </div>
        </section>
        <section className={styles.DestraveConvertSectionMain}>
          <Link href="/FormCurso">
            <div className={styles.DestraveConvertSectionMainContainer}>
                <h3><span>CLIQUE AQUI E</span></h3>
                <h2>DESTRAVE A RABA!</h2>
            </div>
          </Link>
        </section>
        <article className={styles.cardsIconts}>
          <div className={styles.cardsIcontsContainer}>
          <ScrollAnimation animateIn="animate__fadeInDown" >


              <figure >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                
                  viewBox="0 0 81 144"
                >
                  <image
                  
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
                <h3>ARRASE</h3>
                <p>Aprenda um estilo único de dança.</p>
              </figure>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInDown"  >
              <figure >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
              
                  viewBox="0 0 125 109"
                >
                  <image
              
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
                <h3>CUIDE-SE</h3>
                <p>Saia do sedentarismo e melhore a capacidade muscular.</p>
              </figure>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInDown" >
            <figure   >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
           
                viewBox="0 0 120 144"
              >
                <image
                
                  xlinkHref="data:img/png;base64,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"
                ></image>
              </svg>
              <h3>AME-SE</h3>
              <p>Aprenda algo novo e surpreenda-se com o seu potencial.</p>
            </figure>
            </ScrollAnimation>
          </div>

        </article>
        
    </>
  )
}
