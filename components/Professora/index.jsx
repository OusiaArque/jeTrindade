import styles from '@/styles/components/Professora/Professora.module.css'
import Link from 'next/link'
export default function Professora() {

  return (
    <>    
      <article className={styles.mainSession}>
        <div className={styles.mainSessionContainer}>
            <div className={styles.ProfessoraText}>
                <div className={styles.ProfessoraTitle}>
                    <h4>
                        A PROFESSORA
                    </h4>
                    <h3>
                        Jé Trindade
                    </h3>
                </div>
                <div className={styles.mainTitle}>
                    <p>
                        Jéssica Trindade da Silva foi uma das primeiras professoras de Twerk a surgir no Brasil. Sempre apaixonada por dança e estilos diferentes de se expressar, com 17 anos já começou a carreira com  criação de vídeos amadores nas redes sociais. Depois, se especializou e conquistou centenas de alunos ao redor do país. 
                    </p>
                </div>
            </div> 
            <img src="https://baldoo.com.br/API/imageAPI/jessica/professora.webp" alt="" />
           
        </div>
      </article>
      <article className={styles.mainSessionResponsive}>
        <div className={styles.mainSessionResponsiveContainer}>
            <div className={styles.ProfessoraTextResponsive}>
                <div className={styles.ProfessoraTitleResponsive}>
                    <h4>
                        A PROFESSORA
                    </h4>
                    <h3>
                        Jé Trindade
                    </h3>
                </div>
                <div className={styles.responsiveText}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    </p>
                </div>
                <img src="https://baldoo.com.br/API/imageAPI/jessica/professora.webp" alt="" />
           
            </div> 
        </div>
       
      </article>
    </>
  )
}
