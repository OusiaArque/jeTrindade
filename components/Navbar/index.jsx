import styles from '@/styles/components/Navbar/Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', showModal);
    return () => document.documentElement.classList.remove('no-scroll')
  }, [setShowModal]);
  return (
    <>    
      {showModal && (
          <div className={styles.mymodalmenu} onClick={() => setShowModal(false)}>
            
            <button >Fechar</button>
          </div>
        )}
      <nav className={styles.mainNav}>
    
        <div className={styles.containerNavbar}>
          <ul>
            {/* logoMain */}
            <div> 
              <Link href="/">
                <li className={styles.academyLogo}>
                  <img src="https://baldoo.com.br/API/imageAPI/jessica/TWERK-ACADEMY_BRANCO.webp" alt="" />
                </li>
              </Link>
            </div>

            <div className={styles.TitleNavbar}>
                <h2 className={styles.MainTitle}><span>TWERK</span>Class Shake<strong>CURSO GRATUITO!</strong></h2>
                <Link href="#"><img className={styles.imgGoconvert} src="https://baldoo.com.br/API/imageAPI/jessica/setaConvert.webp" alt="Link curso de twerk gratuito !" /></Link>
            </div>
        
            {/* navbarMEnu */}
            <div className={styles.MainMenu}>
              <li>
                <Link href="#" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <image
                      width="30"
                      height="30"
                      data-name="Camada 6"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC+klEQVRIib3XSYhdRRQG4C/PNiZxNnFCNNAOqBHcOKKiC1FRoxLFLOJG0SAuxAQURTQrxTEILgRncQDNRjAYIiKiC4MEA9kokmg7rEQ0OEXyNCWHPg+vr97t203a/uFxoepU/XXO+c+pevNKv0gcglVYjkOx1+xgHoJkG17GZ7HrgHgM9+JWLJ0lwmH8gk9xTxwiiHtYhwcr0/8H23F9EJ+NTVg8R8SBR8Pbs+aYNHBJ5HZhNVxjN37EXymWNpQUaZcjR491qPdPvI6H8VU1OxoHYCXuxykjLfh7rBr6F7tT5W/gVKzA/h0HjWj8jNfwHl7FpZVVoPTLXaVfyojfuii10i+rSr9MjJif6reh9Mui0i/jpV92jrDb0atOMolv8QJOw3MzqO3ncSPOwWOZnrcrK7QRf4/fQn0jxPc11uMGXIE7M6whvHewAR9jNfYbdKphtOV4b+bryKHxT3ALvsi1i7AZT2NtNqIrcXkICIelQMtwNbQRD4yaQvoy1fod1uCajEaE86GMwhGp5sCuhgMV2ohH4dkkvTs6T2PDc3E6LsOTuBZntBEO0JbjYUT+PsDhuH3EpmdmCqKUPqxW7wPx7/gJB+LYanYSJ+X3j2pmH4gPwvHp0efV7CS25HdafX+6xFEWV6Xn6/PbxLt4BSdkiXViJuK6DRuzd0fYb85IbMUjWT6h6OMaa1oF1kY8eA81Fy5Or9Zko9jUmFuaL5jVQ1EqeaAKbcTzk3RiaPxEvIn3M9d7sslclCXVxA/4NWu78ryNeDw33JwNYrwxtzAfhMurVf/FE1mGF1YzUxAvwQO4KXvyU1iW9s32N3hBNsci/y/hGVyAq6vdpyCWT93oVPflZXEeFnTcx728RCJF5+fNtqSy6iCWggnCt/BR5q3KVwPh+cl52OtwVGXRIO6q5fD24rwmSzVbY35GZir0xrIbdSG8PLjDZiaY6GUIv5nFTaeDjUG8M/9WRM3NBaL5vDgQV4gncAeOmcU/bANEqqKDRU9/HLv+AWBSCX0hGIh2AAAAAElFTkSuQmCC"
                    ></image>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#">    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                  >
                  <image
                    width="30"
                    height="29"
                    data-name="Camada 7"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACNUlEQVRIib2XO2hUQRSGvzVLzAPUsBCMaKFiRLBJEQsfuJ1iYWEjFmJjCrWxEiuxs7MQoyFYCQoqErQTQcFHQERBRC2CBomCEh+FKJqHvwycC8Mdd+5sdrMfDHvP2TPz3zNz5t65JUkYA8ARYBfQA/yluUwCN4ELwDecsKSqpA9qDWOSKi7jXmAM2NrkDGOccsJV4C5QjgQ2mwkntr4B0Rngh10vAZbbbxGVcmJgLcaBE0AJ6ACuAKtrxPrICStwp/MVeOpFP08VbiRb/rNEZ236C2lUOM8D4LjNRJRmV7JbtovAC2AvsB3YFkQt4hYat3aolnC9U+3W7z3w2eyS9183sANo83y/gxGM1Iy/A9eAe8BrYBAYyfXvBC4DD4E7wBSwKRipDuE3wDHgvudbAcznMp6x8Q5acwXWHoyWKPwFGAIe5/ydJuo/A5w969mVYLQ6hEdyoluAAzaF7Zb1gogJzwG3PXsncB3o9XwLfmfHqvoT8NazT+ZEi/pHiXWcs5bRFUTAH++6ruxjwn3AGs8+n7uReTtAZPQUFZRPbI2XAruBV2bfsGreZzd8C7jqxe8HlgWj1ELS4chJ652kDXYuy1qXpO6cr99iU5mOTbVjLTAK9Hu+X8BPz14HXLLYZGJTnVG1bTUMPLJHoeyF7w6IR4HNQa8CUo8+G4FztsUmrYJdhquCyDRK5ZSXtsdKa40y67J9aZm0kidOeMLWr1VMA2ey7dAh6bSkj4v8EfNM0h5J/AOm17a9tDP8kgAAAABJRU5ErkJggg=="
                  ></image>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <image
                      width="30"
                      height="30"
                      data-name="Camada 5"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACDklEQVRIie2Xv2sUQRTHP3c577jIaVIEC0lAtNBCwUKRcClEQQTBImga8Q8wrZWdFqJ/QiB9omVAFLQRCSlMZWcl2mhxSYxYmJjMk3e+lWFn9252Pa/yAwM7P7/z9r03u1MRJxhngVvAOaAK/On4S3Stb8AKsAxsdZdTYXFyW5xsihP5x+WNODneNVactMXJ1hBEk/JcnIzpa7gDjA3otcZwBZhW4fYQRZUKcL4GHAi6+qOB9wpYt8AZBRrAJDBnAdWLgyrsegzIYgd4BDwEdlP9p4AbEcL7taCpPy+B+znpFp2GRYXVwiepxZvqM2ACOBlhbSnhDrDm1TU+HgB3g5F9iNqdxz7w3asfKpsVRYXVwhGvXrFSmJhXrVH81Tb5JZUF+rxpLnCWUoeDFTKIEX4G3APqFlwdr28bmAdatsHrwONghZLCKvQ+aP2N+vyDV28EI3KI8fFI0JLPhdyeFDEWjwPHLLB+Ap/MUmzjR+3IVFecCGbnECN8Dbhowh+ByxZk2FdtEZgx/7eC2TnECNetJNb77qlaLjetRFPmAPGPS33eC0ZFUFR4YPwXHqpwEXGxXE7YK/EH09WteodBLP5JViv5ddrRiavAzaArmyPAU+CHWa/5fTpzZG/e6hXmEvCixN9IWV4Ds8kVZl6cbAzhFrEuTs6oZmLlEjAFXLUzeVAXtgSNpc/AAvAO4BcKeq3BJNIafQAAAABJRU5ErkJggg=="
                    ></image>
                  </svg>
                </Link>
              </li>          
              <li className={styles.MenuHamb} onClick={() => setShowModal(true)}>
              <svg className={styles.hambBorder}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              >
                <image
                  width="60"
                  height="60"
                  data-name="Camada 4"
                  xlinkHref="data:img/png;base64,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"
                ></image>
              </svg>
              <svg className={styles.hamMenu}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <image
                  width="40"
                  height="40"
                  data-name="Camada 3"
                  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAD1UlEQVRYhb2YWahNURiAv3PuMYsruUgkkswkwwtuMjwQiox5kFKKEMn4YkyJB1MREjJlyBgPRGR8ICFRKEL3Gq55uo5+59/dc/dae+91z9n3fnU6tdew/73+cf2Jnl26kgO1gSKgO9AP6AgUAr+BBJAC3gEPgGvAY6AEKK/qq1LGk3CaA2OAAUBfoEPo7AruAbeBs8Ap4I8xIwDXE2wKTAPGA32MUXfkBC8A+4ADQDpqZUGLoiLjoY/hwA4VsJUxWjWSeuojgc7AfTWFQJJBA6r+ecBptbM4qQNMAs4Bo8P2DRKwLrAW2JCDnVaFdsARYI46l4FNxSL0MmCxMbt6KACGAmXATZswfmYDS4yn1S/kOmBslIDyJWuqWa1BiF1uBbpkj2cLIoF2BVDfssFX4IR6nKz5a8xwJ6lxsAcwyLdK7G01MBn45hdQVNvf8povwEJgmzGSHxJbNwMTfbuMAiYAu8lScWt1exuvvckxI9rYZdFGQmNuoSdgQo2zU8D7GwJtjafx0DEgvAzQlPpfxY2BccaUCloC6zUmftN09cmYFU06631pzShLAwQUhgH7ZUEboLcxXJkRQDHwPU8BC1R1otZmxozKDBbNiYADNXNE0UB/aFVT3cg7eqZU366U60kEqcUF7yRd9uiXUkON4r168qMYBPyrGivW8i2M1il1gjDE3uYCe0Pm5MJ2DTUzQ9YW2nKxH4mDB42n+SPmctQSByuRdKhqm4ixGk/joZelHsgmnXIoDCQ/bgFWqS0mIzaNolxtWHLxooi5SRHus+bFMPposVCmm+cjoKfSxsaIyXcR8LljKkt4+bEGKU1pFVvs+M5fLjcxBwoca867Muk8MD9iQamGhYcxCCgqrqe5dnyIufyQS39Kb/0vgPbGlAxlWivGHWr26IfPMkYyXAeeivRvgYvGcAWvNV7FjZzk8ZA4eEWSRFLdfifw0ZiSoalDtZMrfQNU/NI7FM/ubgFngCnG1ExZtEnvyR/zzMNk5fKwOHhYuw6VejO99KYfVkp9DfjiXASsZ4xkeKLtlmf4Lu5v1P2HGEsqkLZbrZh+NtLqNFe9Mf9pSGl/yLKwptjojxZ+AcVhFmjTsaaRVLrS/06bPYkHTdU4VFOIg86wRRKbgKiByuX5mDESPzu0k1Bi29nW3fL4pMcuHtctxOty5aVeO5cDP4P2CBMQtclLwA2gkVY9QR7oygfNIOKtJ6PWhBUI2VzW1CMJfro2fUK/zMIr7U9L1nJ2wqq02SRGSeUjgkqvWhpNElBF/XK6cmf2bFpOXroQYvR3dJ38i5DOHX6Af8GFurTGgD/OAAAAAElFTkSuQmCC"
                ></image>
              </svg>
              </li>
              
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}
