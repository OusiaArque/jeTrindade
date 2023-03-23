import styles from '@/styles/components/Modulos/Modulos.module.css'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "animate.css"


export default function Modulos() {
    const [selectedModule, setSelectedModule] = useState(0);
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
      { title: 'Quadril Solto', 
      Modules: ['Neste módulo você irá trabalhar movimentações para deixar o seu quadril mais leve e solto, liberando o líquido sinovial das suas articulações, permitindo que fiquem mais dispostas para os treinos. ', '-Dicas para soltar o quadril.','-Isolamento de quadril.','-Encaixe lateral e frontal.', '-Rotação completa.', '-Dicas adicionais.'] },
      { title: 'Principais Movimentações',
      Modules: ['Nesse módulo você irá fazer os isolamentos das duas principais movimentações de encaixe do twerk, criando a consciência corporal necessária para soltar o quadril e deixar sua movimentação mais fluida!', '-Dicas para soltar o quadril.','-Isolamento de quadril.','-Encaixe lateral e frontal.', '-Rotação completa.', '-Dicas adicionais.']},
      { title: 'Intenção e amplitude: hora de dançar ',
      Modules: ['No último módulo vamos trabalhar um pouco do que você quer passar na sua dança e qual tipo de intenção você quer colocar nas execuções dos passos. Também aprenderá sobre a amplitude em que irá executar os movimentos, de modo a deixar a sua dança mais próxima da sua zona de conforto e da melhor representação da sua personalidade.', '-Dicas para soltar o quadril.','-Isolamento de quadril.','-Encaixe lateral e frontal.', '-Rotação completa.', '-Dicas adicionais.'] },
       ];
  
  
  
  
  return (
    <>    
        <section className={styles.MainModules} id="mainConteudo">
            <div className={styles.MainModulesContainer}>
                <h2>o que você vai <span>APRENDER?</span></h2>
                <div className={styles.ModulosHereContent}>

                    <div className={styles.acorddeoncardshere}>
                      <ScrollAnimation animateIn="animate__fadeInDown" >
                        <figure>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="65"
                            height="141"
                            viewBox="0 0 65 141"
                            >
                            <image
                                width="65"
                                height="141"
                                xlinkHref="data:img/png;base64,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"
                            ></image>
                            </svg>
                            <p>Total de</p>
                            <h4>16 AULAS</h4>
                        </figure>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="animate__fadeInDown" >
                        <figure>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="133"
                            height="120"
                            viewBox="0 0 133 120"
                            >
                            <image
                                width="133"
                                height="120"
                                xlinkHref="data:img/png;base64,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"
                            ></image>
                            </svg>
                            <p>Carga horária</p>
                            <h4>3 HORAS</h4>
                        </figure>
                        </ScrollAnimation>
                    </div>
                    <div className={styles.acordderonHere}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="738"
                        height="177"
                        viewBox="0 0 738 177"
                        >
                        <image
                            width="738"
                            height="177"
                            data-name="Camada 13"
                            xlinkHref="data:img/png;base64,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"
                        ></image>
                        </svg>
                        {modules.map((module, index) => {
                  const contentRef = React.createRef();
                  contentRefs[index] = contentRef;

                  return (
                    <div className={styles.ItemDuvia} key={module.title}>
                      <div className={selectedModule === index ? styles.Activeoption : styles.DesactiveOption} onClick={() => handleModuleClick(index)}>
                        <strong>{selectedModule === index ? ' - ' : ' + '}</strong>
                        <h4>MOD.{''+ (index+1)+' '} </h4>
                        <h3>
                            <i> # </i> <span>{module.title}</span> 
                            
                        </h3>
                        
                      </div>
                      
                      <div
                        className={selectedModule === index ? styles.TextHere : 
                          styles.TextHeredesativdo }
                        ref={contentRef}
                        style={{
                          overflow: 'hidden',
                          transition: 'max-height 0.5s ease-out',}}
                        >
                            {module.Modules.map(module => (
                            <p key={module} className={styles.openedP}>{module}</p>
                            ))}
                            </div>
                            </div>
                        );
                        })}
                        <Link href="/FormCurso">
                            <div className={styles.moduleConvert}>
                                <h2>É GRATUITO! CLIQUE E DESTRAVE ESSA RABA!</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
