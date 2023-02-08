import styles from '@/styles/components/Duvidas/Duvidas.module.css'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react';
export default function Duvidas() {
  const [selectedModule, setSelectedModule] = useState(null);
  const contentRefs = useRef([]).current;

  useEffect(() => {
    contentRefs.forEach((contentRef, index) => {
      if (selectedModule === index) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0';
      }
    });
  }, [selectedModule, contentRefs]);

  const handleModuleClick = (index) => {
    setSelectedModule(selectedModule === index ? null : index);
  };

  const modules = [
    { title: 'Por onde eu assisto a aula?', 
    content: 'Depois de fazer o seu cadastro nesse site, enviaremos para você o link dos vídeos referentes a cada módulo, onde você pode assistir em qualquer plataforma, desde o seu celular até uma TV smart.' },
    { title: 'Preciso comprar algum material para fazer o curso?', 
    content: 'É preciso ter apenas acesso a internet e um espaço em algum cômodo de casa para treinar os movimentos e criar as suas danças. Recomendamos usar roupa confortável e um short curto para fazer os movimentos com mais liberdade.' },
    { title: 'Qual o diferencial da Twerk Academy?', 
    content: 'A Jé Trindade é apaixonada por twerk e também por passar os seus conhecimentos para quem quer aprender o melhor desse universo. O nosso maior diferencial é a experiência, que por sua vez é atrelada com a dinamicidade da dança.' },
    { title: 'Qual o prazo para assistir as aulas?', 
    content: 'Não existe um prazo. Você terá acesso vitalício aos conteúdos. No entanto, a gente recomenda que você acesse logo para não perder nenhuma aula e não ficar para trás, hein! Ah, e caso queira rever os módulos, você tem total liberdade.' },
    { title: 'Terei contato com outros alunos?', 
    content: 'Por serem aulas gravadas e enviadas diretamente para o seu e-mail, você terá esses módulos só para você. Caso queira dançar com outras pessoas, você pode convidar amigos e todos praticarem o twerk.' }
  ];




  return (
    <>    
      <section className={styles.MainSectionDuvidas}>
        <div className={styles.MainSectionDuvidasContainer}>
            <header className={styles.headerModules}>
              <div>
                  <h2>GRATUITO</h2>
                  <h3>Curso de Twerk para iniciantes.</h3>
              </div>
              <div>
                  <Link href="">
                    <div className={styles.convertDuvidasButtons}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 472 60"
                    >
                      <image
                        data-name="Camada 14"
                        xlinkHref="data:img/png;base64,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"
                      ></image>
                    </svg>
                  
                    <h4>ACESSO AO CURSO</h4>
                     
                      
                    </div>
                  </Link>
              </div>
            </header>
            <div className={styles.myItems}>

              <svg className={styles.borderAcordeon}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
        
                viewBox="0 0 738 177"
              >
                <image
                  width="738"
                  height="177"
                  data-name="Camada 26 copiar"
                  xlinkHref="data:img/png;base64,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"
                ></image>
              </svg>
              <div className={styles.TitleAcorddeon}>
                <h4>DÚVIDAS FREQUENTES</h4>
              </div>
              {modules.map((module, index) => {
                  const contentRef = React.createRef();
                  contentRefs[index] = contentRef;

                  return (
                    <div className={styles.ItemDuvia} key={module.title}>
                      <div className={selectedModule === index ? styles.Activeoption : styles.DesactiveOption} onClick={() => handleModuleClick(index)}>
                        <strong>{selectedModule === index ? ' - ' : ' + '}</strong>
                        <h3>
                        {module.title}</h3>
                        
                      </div>
                      
                      <div
                        className={selectedModule === index ? styles.TextHere : 
                          styles.TextHeredesativdo }
                        ref={contentRef}
                        style={{
                          overflow: 'hidden',
         
                          transition: 'max-height 0.5s ease-out',
                        }}
                      >
                        {selectedModule === index && <p>{module.content}</p>}
                      </div>
                    </div>
                  );
                })}
              <Link href="">          
                <div className={styles.convertDuvidas}>
                  <h4>CLIQUE AQUI E ARRASE NO ROLÊ!</h4>  
                </div>  
              </Link>
            </div>
        </div>
 
      </section>
    </>
  )
}
