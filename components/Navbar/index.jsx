import styles from '@/styles/components/Navbar/Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';


let scrollStylesMargin
let margintoprefine


export default function Navbar() {
  // fixednav
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [showModal]);
  const [NavScroll, setNavScroll] = useState(true);
  useEffect(()=>{
    window.addEventListener('load', function(){
      if(window.scrollY >= 180){
          margintoprefine="0"
      } else{
          margintoprefine="-100"
          setNavScroll(false)
      }
      
  })
  window.addEventListener('scroll', function(){

      if (window.innerWidth < 550) {
          scrollStylesMargin = 180
      
      }else{
          scrollStylesMargin = 280
      
      }

      if(window.scrollY < scrollStylesMargin){
          
              margintoprefine = "-100"
      
          } else{
              margintoprefine = "0"
          }
      if(window.scrollY > scrollStylesMargin){
          setNavScroll(true)
          margintoprefine = "0"

      } else{
          setNavScroll(false)
          margintoprefine = "-100"
      } 
      
  
  })

  
  })
  

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

    //



  return (
    <>    

        <div className={styles.scrollBarMain}  style={{marginTop : margintoprefine + 'px'}}>
            <div className={styles.scrollBarMainCotainer}>
                <Link href="#top" scroll={false}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="114"
                  height="46"
                  viewBox="0 0 114 46"
                >
                  <image
                    width="114"
                    height="46"
                    data-name="Camada 6"
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
                </Link>
                <div className={styles.MenuHamb} onClick={() => setShowModal(true)}>

                  <svg className={styles.hambBorder} onClick={() => setShowModal(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
              
                    viewBox="0 0 49 49"
                  >
                    <image
                 
                      data-name="Camada 2"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAE/ElEQVRogc2aa4hVVRTHf3OmZjLHdDK0rCEfWWEpiD1I5kNWWBmI0eOTFkSopA5R9CYLJIuCID8ERRKWPSB6UFCm9o7CYpoIqikLsaaayrEsp7Rdrli1jm332Xdm7tzbvfs/LBj2+3/23muvx20QJ1SACcDZwEzgdOBooBU4rMSQfcDPQA/wLvAB8DLwS6FlGRgOiQbgeGChyVFAc6HV0PA78AWwDngK+KoWJI4FVgBLgZGF2srwA3AfsL5cMuWQaAE227EphX3Aj8Bukz+AzHZKSY8CjijRN8dnwM3AczZeVUnosfkUGB2U60RbgFfsnO8wAv0BiUONhN6bduAc4KTCLP9Cj9ljwE023oAoh8QI4FngXG+ih4FHgG12HMrBMcDJwHLgghL93gQW2+6URLl3YgpwMdBoX/49oCL1BhwMnA9cDcwp1ML7wKKBiFSqYqsJvTMdwI0RFd0JXAZ8EpsvJRI55pmWOi4o112/EPg27JAVhqg/XgQusmPk4zRgNdAUrjDciSY7o/0JkJkBPB3siNgD+7jf0N+JE4AngdeAy4GDCsPWFh8By8xMyaHWwipg4gEr0Z0QJ43iZJM4EZO94mSW1dVbOrx15bJanDTk68p34qxAvTWZHk8Ba4GNwTo6TN3vP066RTeY7s/RYxZmCtD7eUfwHo00lbufxFQzpX2oEfZ1IiQUb5tl4GNRflqUxCXAGK+y10zjlKD22QPAX96alMB5apdldh98LfUMsDUxEorPg7dDtecpapBm5iP46AwYp4Kd9oF96APYriTGeoXqPnYnSAC72J3BQ6zvxZwsuA9bEz1KOfpMcqhvMym0nXqG4oTUEX3mOebI8jvho7cK/sH/iR2Rj9wUktiVMAHM3d0blLWEJFLUSj4kclIaQxKHFLqlhSwwjxS/hSSOTJxEq4mPPSGJCRZaSRUasxoXrK0/s8uSQ43ByQmTGBM8zho2+j4L9K6aINMKXdOB+hCHe6v5Tu2pzGwSHzMSJaDBu/lBmbqwG5VEV1AxP3LuUoCa3nO9dYiFcbYriSdUTXmV04EFCZKYF9h5vwJv6L1QEm/Z2fKxNDEt1QZcH5QpgXd0RzIzbdcGDdRdvbIwVP2wzNS/j/vz//Pg2WjzmqZ6jXotlRWNf9YQ7RYVHOVNucki6Q7PLVXDb02wLn2977XkSr2gOZG7AwJq392ZEyDwrR8FXgoWq7mI2+tEQBMz9wBnBOUPWd7iPwTRvdni5KdIxO0WcZLVMBI4QpysiayjS5y0he1jAywR989fOMBdNnisTzVlrDhZF5l/lziZG5unUGBx2ZWRQVReECeTI32qJdPFyauRef+0jxudp1DgEVkVGUxlmzi5Qpw0R/oNV1rEyXXi5JvIfPvEyYqBxi0UeKJ34Db7CjEyr4uTheKkNdJ3qDJOnCwWJ1si46vsFifLBxtrsHSXRtmuAm4dIP+82aTL3pSeQosDMdGypjMtDDm7RLvtwLWWaBkQQ83ZnQmsLJHdzKEO/McWt/rSUsK5r9JsOn+K/aRiWsTN9PG8qfbQOI2inMSjOiNLzK5qK9TGkQ/eEK0totse3fVm4A0Jw8meqkl8DXApML4KabE9lhFV++3BSFxpUFSSAh5vJrvKJDsupX4iFGKn2WbdduY3RJyzmpBQqLd1IjALONW8QrX5Sx0ftXv0S39omSg1OvWnQr6fXx6AvwFp1a8n0z9CXgAAAABJRU5ErkJggg=="
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
                  </div>
            </div>
        </div>

      {showModal && (
          <div className={styles.mymodalmenu} onClick={() => setShowModal(false)}>
             <div className={styles.closeModal}>
              
                <svg className={styles.closehambBorder}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                >
                  <image
                    width="60"
                    height="60"
                    data-name="Camada 2"
                    xlinkHref="data:img/png;base64,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"
                  ></image>
                </svg>
                <svg className={styles.closehambBordercenter}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                >
                  <image
                    width="40"
                    height="40"
                    data-name="Camada 1"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADxklEQVRYhc2YW4hNURiAv9ku4xYKgzSSknCOTHJ5cRsZkhjXaciDFB4IEbk+uKZcXsSDywuF3K/DKKKEqEPneBCFQoTc7zT6x79n9py19jl7n7l+L+ectdde+ztrr/Wvf62sfn0iZEBTIAfoCwwCegJtgd9AFtAYeAc8AG4AD4E3wN+wj2pslKSmI1AIDAEGAj1S1q7kPnAHuACcBf4YNXwI2oPtgFnANGCAcTU40oOlwEHgEFCW7s5GnXJyjMIkRgN7VLCLcTUcjvb6OKA3ENeh4Ivjd0Ff/2LgnI6zmiQbKAZKgAmp2vUTbAZsBrZnME7D0B04CizUyWVge8UivRpYYdSuHRoBo4CPwG2bTDILgJVGae1LbgEmpxOUf7Kpll+rHzIudwF9/AQl0K4DWvg0UBfIeNvodfAKyqsdXI9yLuOBIveHK5ir074hkKUxt60rmKWDs1dAueNAew3aJcZVO6eBzkAH/Z6OIbqklgu2AaakucHLvFgi/i6WiL/URs4YNapyTNqPJeKvYon4Ww3+QSgAmohgV6B/CMFW7pdYIv4LmJpCUuSKY4m4NzlobtSykw90E8GhunIEZX9eJFoxyzySZy1y071yet/ugM+RzKmfo+87DCOAk3mRaEVPqOQUj6Qr9ztJ7oJ2SFAGOZpshkXGxykfyWUp5IaFfE6u5IOvNUBmguR2hbFE/LvfvdWQE0pta3EYCpJft0XufIZy5ThBsto0SEK7yKfKcmC4URqcMqcGEgMJ3NuM0v9s1B7MFEcEP1ejgRM6IX4ZVyonziQdg5nwXQSfVkOu2CsnYy4vEt2QF4lWxFW9PjFDybeOLYvNVE7j4CqdODUheU8EL4XZp+qY8pPL16IxKSQvGy3a+SGbfkd3/c+sVezMscid8ci5uJLZSZJzra2a3AQei6AE6ivGZX9+WuRG+tQeoytOtqfsq1HLznXgk3uyIPvei26SmAbZJs4HWgN7AwbhUu25L3oIUGjUqMpzYKxs7F1BSVoPADOMqvWD7MeX4En5yzTYvm4Aco+Ane4P71ocA3YY1esW6ai1wBOboLAVOFKPgtJBh70FyYJyPLZUDx3rmlPA+uRn2tItmUEzNQ7VFRL85wAfggiiY6BIl7TaRsLOdD0iNrCdbrl80m6XEBQNsRsLynNdt9d4g38YQXRMXgVuaWDuJntVo1Y43ssSqMHeb7taQdBk9ZouPZLiz9bVI+U/s/BCV5R9YSZhmGxaYpRkPiIqxx5y0CTpvrx+6d2WnjEtPf9NB/1dvU8+RTJ45gT8A42b/5AFTu65AAAAAElFTkSuQmCC"
                  ></image>
                </svg>
              </div>
            <div className={styles.mymodalmenuCotainer}>
             
                <Link href="/FormCurso"> 
                    <h3>
                      Acessar <span>CURSO</span>
                    </h3>
                </Link>
                <Link href="#top" scroll={false}> 
                    <h3>
                      Ir para a <span>HOME</span>
                    </h3>
                </Link>
                <Link href="#mainProfessora" scroll={false}> 
                    <h3>
                      A <span>PROFESSORA</span>
                    </h3>
                </Link>
                <Link href="#mainCurso" scroll={false}> 
                    <h3>
                      Sobre o <span>CURSO</span>
                    </h3>
                </Link>
                <Link href="#mainConteudo" scroll={false}> 
                    <h3>
                      O <span>CONTEÚDO</span>
                    </h3>
                </Link>
                <Link href="#Video" scroll={false}> 
                    <h3>
                      Twerk <span>ACADEMY</span>
                    </h3>
                </Link>
                <Link href="#mainDuvidas" scroll={false}> 
                    <h3>
                      Tire as <span>DÚVIDAS</span>
                    </h3>
                </Link>
                <div>
                  <Link href="https://www.instagram.com/jetrindadeoficial/" target="_blank" rel="noreferrer">
                    <svg className={styles.instagramfb}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <image
                        width="30"
                        height="30"
                        data-name="Camada 4"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC60lEQVRIib3XS6iVVRQH8J/Hm69KS+1FmHCzKA0bFGlk1CBKykdE5CBBDCtRCDSSIqJBFFkpQYOgd/SAHoNAUXwgUoMaSA2TILPHyMKEHoqURxZ3Hfo6+3znuxev/uGwYe+193+vtf5r7e+M+XXwUYnJuB+LMQUnjA7GoI1v8A6+jlMH8ugYH8EqzBwlwm7MxdXYEJdoIX5P4ZnTSCojelt6PStIr8Pawuz0ITxfFcTXY9oZJA7cGrmdWEyXOIrf8E+KpQ7tDGmTIxcNNKj3GD7AczhQrPbGeCzDk7iypwX/DhRT/+FoqvxDXIV7cFbDRSMav+N97MR7KagC/Yg3JmnU9rMjVPynWIGHsQuD3QatYssQfsKbWXevj4D0DdyHG/BCpuezwqoP8S/4M9TXQ3w/YDPuxcJsPDtTeFvwCb7AQxjb6VTdqAv1iczXBV3zX+IB7M+9k7ADr2A9nsaduCMEhPNSoO3uaqgj7hhVhfRdqvVnrMOSjMaB1EBEYWqqOXCk4kCBOuJeeC1JH0vhdQ6ch9m4HZuwFNfUEXZQl+NuRP724Hys7nHotZmCKKW9xe5TIP4Lh3E2LilWhzArx7+LlVMgPgcz0qNvi9UhfJXjsPr+cImjLO5KzzfnWMU2vIvLssQaMRJxPYit2bsj7CszEvvwfJZPKPrSyp5agdURt3tsnJZerctGsb2yFp3t8Wwa1Si180IF6ojHJenBrvnL8RF2Z66PZ5O5OUuqikP4I2u78LyOeDAP3JENotrkJ+YH4eJi1//xUpbhgmKlD/H0/A5bnj35ZcxJ+2r763xBVuci/2/jVdyERcXpfYjlcxid6ol8LOZjQsN73MpHJFJ0Y75s0wurBmIpmCD8GJ9n3op8VRCeX5GXvRsXFhYV4qZaDm9vyWeyXayWGJeR6YfWQHajJoSX5zbYjAQHWxnCH0fx0OFgaxB/n38roubOBKL5vNURV4gnsAYXj+Iftg4iVdHBoqe/iCMnARglkAidEvF8AAAAAElFTkSuQmCC"
                      ></image>
                    </svg>
                  </Link>
                  <Link href="https://www.tiktok.com/@jee.trindade" target="_blank" rel="noreferrer">
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
                        data-name="Camada 5"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACLUlEQVRIib3WTYhPURjH8c8wYSgvTcnrwigiCxILL5kdK8lGFhMLFtgoJVsL2chCXiZZCeUtsbOhvExNakrCQpKUyNtC5H106pk6/a///d//f2Z863Tvc+5znt99znnuObftXdc+wTLswnpMwx8jywtcxUl8bI/Q3TiH2SMslrM02nLsSMLTcWiURXM2YWAMFmNl4fHo0pMyno/2FmV+4HPcpySmxLURne0VHevRh/1owwScx5w6vjmDSXiw0F2dD3iQeQ9UFR5Otv6xREdj+hsyXOFa7mBvzEQprRZVPdKyncJDbMQarP6X70gLD9EXbVs94WanOq3fS7wNuy17NglrMTbr+1aIEFTN+BMu4haeYAV6a8Z34Czu4iZeYVEhUhPCT7EHt7O+qfhdk/GPiNcTLRXYuEK0isLvsRP3a/o7QjTfA5L9M7M7C9GaEO6tEU17+taYwnGRdUuUCf/Cjcxeh0txmg3R8pldVtVv8DyzD9SINhpfStnAX9GGmFjw4Ht231T2ZcIzMTezj9e8SFrfa5k9rVFB5ZSt8XhswOOwL0c1b44Xvo4Lmf8WTC5EqUOZsPh+U4E9CzttEFfi0/mS+S2IH8XKlE11Yh5OR+AhvtaIduFM+Famys7VHVmfwL3YCgfjwF+F3VhSGNWAqr8+C3EsPrEXUcEpw1kFz2q0tVc5tDNmRBsuP1O2jyKT/0l/Ek4Vm9bvf/EOh5NwKpQjOIjXo6ye/kK3o/8vcahlolPJdsoAAAAASUVORK5CYII="
                      ></image>
                    </svg>
                  </Link>
                  <Link href="https://pt-br.facebook.com/je.trindaade/" target="_blank" rel="noreferrer">
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
                        data-name="Camada 3"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACBUlEQVRIie3XS4iNYRzH8c/MHDMNjctCFqLIgoWFBUkopVBKKZQka0qKlR0LsTNlQ/YuS2WFhYUssLGzkNhQxjULw1z05zn1dp5zZp7zdmZWvvXW+1x/z//9X55z+j6uPSuxCcewGf2Y1htir++4h9v4Ers20tbHcRXLeiTWjr04ihN4HafZjtE5Fm0SWtewNIRPxks2Ze7Yg21Ni+eTPmwJHy+oIRqB9xDPU+AsxBBW4UgKqJlYFMJTM0xoxzgu4xJ+tYxvwKEC4clG1jU7D3ChQ7oVp2G3wmHhnZbNh8NnWI71BdbWEh7D00o74uMizmUzZ6HodBUm8aPSXlw3K7oVDgsHKu2+9HRNyaeOKP6aDvmhJQvi/XNywVRKqSXZDm0oEb6P8xhMwTVWGfuGUxhJBzyAK9kONYVD6FXW+4/w+ZtKeyib0YESHw9kPZ3Z2nGkhRKL49ZakwLrN94lS6WDr0wlM1yxLlvdgRLh/diVhN9idwoy6Va7iR3J/yPZ6g6UCA+mp2l91T39KZeH01NMnQJSLZfxPpHNKqBb4Z7xX3hehbsRn0653GSixi+Yv7r9lWJQSrWSNWreTuOx8AkOZ0PtWYG7+Jmsj/ze2HbmzDwL4Rs4WFhM4hLYmfV2x+MwNj71I5xJ9+pc8wKn8alp5S2sxr5Uk3v1h61JGPge1/ES/gB2CFYInb5AdQAAAABJRU5ErkJggg=="
                      ></image>
                    </svg>
                  </Link>
                </div>
            </div>
          </div>
        )}
      <nav className={styles.mainNav} id="top">
    
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
                <Link href="https://www.instagram.com/jetrindadeoficial/" target="_blank" rel="noreferrer">
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
                <Link href="https://www.tiktok.com/@jee.trindade" target="_blank" rel="noreferrer">    
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
                <Link href="https://pt-br.facebook.com/je.trindaade/" target="_blank" rel="noreferrer">
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
