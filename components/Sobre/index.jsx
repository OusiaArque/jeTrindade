import styles from '@/styles/components/Sobre/Sobre.module.css'
import Link from 'next/link'
export default function Sobre() {

  return (
    <>    
        <section className={styles.SobreMain}>
            <div className={styles.SobreMainContainer}>
                <div className={styles.textSobre}>
                    <h3>SOBRE O CURSO</h3>
                    <h2>CLASS SHAKE</h2>
                    <br />
                    <p>Este curso 100% gratuito foi criado com o intuito de ajudar todas as pessoas interessadas no twerk e nas danças pélvicas, que querem evoluir sua dança, se introduzirem na cultura e na auto descoberta que o twerk nos traz.  
                    </p>
                    <br />
                    <p>Nele você aprenderá o essencial para dar início a essa nova trajetória de sua vida, despertando o seu quadril e mostrando que todos os corpos são capazes de praticar as danças pélvicas!
                    </p>
                </div>
            </div>
        </section>
        <section className={styles.SobreMainResponsive}>
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
            <img className={styles.responsiveTeacher} src="https://baldoo.com.br/API/imageAPI/jessica/teacherAbout.webp" alt="" />
          </div>
        </section>
    </>
  )
}
