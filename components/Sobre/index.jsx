import styles from '@/styles/components/Sobre/Sobre.module.css'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "animate.css"

export default function Sobre() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      });
    });
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>  

    <ScrollAnimation animateIn="animate__fadeIn" >


        <section className={styles.SobreMain} id="mainCurso">
            <div className={styles.SobreMainContainer}>
            
                <div className={styles.textSobre}>
                  <ScrollAnimation animateIn="animate__fadeInRight" >
                    <h3>SOBRE O CURSO</h3>
                    <h2>CLASS SHAKE</h2>
                    <br />
                    <p>Este curso 100% gratuito foi criado com o intuito de ajudar todas as pessoas interessadas no twerk e nas danças pélvicas, que querem evoluir sua dança, se introduzirem na cultura e na auto descoberta que o twerk nos traz.  
                    </p>
                    <br />
                    <p>Nele você aprenderá o essencial para dar início a essa nova trajetória de sua vida, despertando o seu quadril e mostrando que todos os corpos são capazes de praticar as danças pélvicas!
                    </p> 
                    </ScrollAnimation>
                </div>
               
            </div>
        </section>
  
    </ScrollAnimation>


        <section className={styles.SobreMainResponsive} id="mainCurso">
          <div className={styles.SobreMainResponsiveCotainer}>
            <h3>SOBRE O CURSO</h3>
            <h2>CLASS SHAKE</h2>
            <br />
      
            <p>
              Este curso 100% gratuito foi criado com o intuito de ajudar todas as pessoas interessadas no twerk e nas danças pélvicas, que querem evoluir sua dança, se introduzirem na cultura e na auto descoberta que o twerk nos traz.  
            </p>
            <br />
            <p>
              Nele você aprenderá o essencial para dar início a essa nova trajetória de sua vida, despertando o seu quadril e mostrando que todos os corpos são capazes de praticar as danças pélvicas! 
            </p>
            <br />
            <img ref={elementRef} className={`${styles.responsiveTeacher} ${isIntersecting ? 'comMargem' : 'semMargem'}`}  src="https://baldoo.com.br/API/imageAPI/jessica/teacherAbout.webp" alt="Professora Jé Trindade Twerk Academy" />
          </div>
        </section>
    </>
  )
}
