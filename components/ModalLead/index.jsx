import styles from '@/styles/components/ModalConvert/ModalConvert.module.css'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import Router from 'next/router';

import axios from 'axios';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "animate.css"

const headers = {
    'Content-Type': 'application/json', // Define o tipo de conteúdo para JSON
    
  };
export default function ModalConvert() {
    const [showModalLead, setshowModalLead] = useState(true)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        twerkLevel: "",
        city: "",
        genero: "",
        twerkDefinition: ""
      });
    
      const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        axios
          .post("https://baldoo.com.br/Amply/DisparadoresDeEmail/Jessica/email.php", formData, {headers})
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            
          });

        }


      useEffect(() => {
        if (showModalLead) {
          document.documentElement.style.overflow = "hidden";
        } else {
          document.documentElement.style.overflow = "";
        }
    })



    
return (
    
    <>    
     {showModalLead && (
      <div className={styles.mainConvertModal}>
            <div className={styles.mainConvertModalContainer}>
                <div className={styles.headerModalForm}>
                <Link href="/">
                <div className={styles.closeModal} >
                    
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
                        </Link>
                    
                    
                </div>
                <div className={styles.contentForm}>
                        <h2>Bora começar?</h2>
                        <p>Preencha o cadastro abaixo e receba
                        o acesso ao <span>curso gratuíto</span> em seu e-mail. </p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                        
                                height="60"
                                viewBox="0 0 501 60"
                                >
                                    <image
                                   
                                        height="60"
                                        data-name="Camada 6"
                                        xlinkHref="data:img/png;base64,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"
                                    ></image>
                                </svg>


                                {/* resp´here */}
                                    <svg className={styles.svgHereResp}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="280"
                                    height="60"
                                    viewBox="0 0 280 60"
                                    >
                                        <image
                                            width="501"
                                            height="60"
                                            data-name="Camada 6 copiar 4"
                                            xlinkHref="data:img/png;base64,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"
                                        ></image>
                                    </svg>
                                <input
                                type="text"
                                placeholder="SEU NOME"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete='off'
                                />
                            </div>

                            <div>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="501"
                                height="60"
                                viewBox="0 0 501 60"
                                >
                                    <image
                                        width="501"
                                        height="60"
                                        data-name="Camada 6"
                                        xlinkHref="data:img/png;base64,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"
                                    ></image>
                                </svg>
                                
                                {/* resp´here */}
                                <svg className={styles.svgHereResp}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="280"
                                    height="60"
                                    viewBox="0 0 280 60"
                                    >
                                        <image
                                      
                                            height="60"
                                            data-name="Camada 6 copiar 4"
                                            xlinkHref="data:img/png;base64,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"
                                        ></image>
                                    </svg>
                                <input
                                type="email"
                                placeholder="E-MAIL"
                                id="email"
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete='off'
                                />
                            </div>

                            <div>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="501"
                                height="60"
                                viewBox="0 0 501 60"
                                >
                                    <image
                                        width="501"
                                        height="60"
                                        data-name="Camada 6"
                                        xlinkHref="data:img/png;base64,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"
                                    ></image>
                                </svg>
                                
                                {/* resp´here */}
                                <svg className={styles.svgHereResp}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="280"
                                    height="60"
                                    viewBox="0 0 280 60"
                                    >
                                        <image
                                          
                                            height="60"
                                            data-name="Camada 6 copiar 4"
                                            xlinkHref="data:img/png;base64,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"
                                        ></image>
                                    </svg>
                                <select
                                id="twerkLevel"
                                className={styles.twerkLevel}
                                name="twerkLevel"
                                defaultValue={formData.twerkLevel}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                     
                                >
                                    <option value="" disabled selected hidden>QUAL SEU NÍVEL NO TWERK?</option>
                                    <option value="Iniciante">INICIANTE</option>
                                    <option value="Médio">MÉDIO</option>
                                    <option value="Avançado">AVANÇADO</option>
                                </select>
                       
                            </div>

                            <div>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                      
                                height="60"
                                viewBox="0 0 501 60"
                                >
                                    <image
                             
                                        height="60"
                                        data-name="Camada 6"
                                        xlinkHref="data:img/png;base64,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"
                                    ></image>
                                </svg>
                                
                                {/* resp´here */}
                                <svg className={styles.svgHereResp}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="280"
                                    height="60"
                                    viewBox="0 0 280 60"
                                    >
                                        <image
                                   
                                            height="60"
                                            data-name="Camada 6 copiar 4"
                                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAA8CAYAAAB/2CPZAAAL2UlEQVR4nO3deaxcZRnH8e+de1taoKWWU6EsZRmgKIqyIy7EoCibEA2L2kQEJMQtMQy4/IG41IAZjUFCgiIhKovGUI0LMbhFIxBUAqIEhCFKAiodCygtLdBe82aead+e9z0zZ2bO3J6Z+X2Sk3vnfc/M3Dl3nnnmXc57ptYeeClDsgQ4AjgG2A94PbAbsOewnrAH00Al8rO9yTazOhZ9mfLuNOvdTh9Pd/tFYCOwpcDnr1gMOuvsp3uOp4D1wO+BfwH3AX9KGvWNwSMUrFmtuWMwH5gBdgJ2BvYAlgN7Ayvss8L9/kqrn+fF6nTquIr43Pu9YjH1jHd73RwdpZ5izuoKV3RSXwm8BzjSkvmKYA8RKZu/2YfM3cBtSaO+di7/vma1VvES/XxL5svt82SlJfq9bFsK7GLJfsaSvBK9jJrtYg4oLOaKSupvAC4EzgV2DWpFZFS4VsV3gG8njfpDO/Jvtpb9tPXwuW13YB/gMOBQazQsAxZZol9gyX46eDCR8toac8DAMTdoUnfJ/Erg5KBGREaZGxL4PvDFpFF/pCyvw2vVz7OuTpfk9wX2B6rAAXY7SSX5aSV7KbmtMQf0HXODJPXVwGUWNCIynp4DbgYuTxr19WV8hdaid133C63rfrEl+0Ns29fG7pfZF4GF9sXAn0ujLnwpi60xZ2PxPek3qS+wboIDgprtbQL+DDxuYwZuezbYa+5N5dxIjdmlf5LxYRArIzJJKl3W/n1n+yDaxR7L36dqP2dsYtVm775Z3+5iz+EfA3+C4BZvm43cv5tBJ9aNy8S8GftfueP4qJdENgV7tl7zRi9GXijgOExZnLYfe9qGxtrd2HtYN/YhHd6vPjfJ57NJo/7LoKaELNFjr3tearx+kSX+Xe0Y7eRN4PNjQYl+tLj/4wnAy8Dv7PZMP4mxT0OJOaCnmOs3qS+0ZH1QUNNK2vcDtwM/twkBIjIHkkY995M0qzWXyA4HzgJOA15jH4JZXgI+lTTqX82oL7Vmtaa3oOxofcUckDvmBul+/zrwUe/2f4HrgGuBJ4O9RaRU/C8A1rI9GviMfeB04roGL0wa9Vivw8hRspcdpOeYy+jp284gSd11X11gp5m4cwLXAA8He4lIacVa9s1q7STgY8CZQeU27jScC5JG/YWgZowo4cscyR1zNjyXaZiLz4hIicUSuq9ZrV0CfNJmlsd8D7goadSfj9SNJSV5GbJcMQdkxpySusiEyjP+3qzW9rVeuKOCypY1SaP+7qB0gijRS8G6xhyQGXNK6iITKu+kuma15maMfwN4f1DZcgXwBXqcqDeOlOClILljLk1JXWQC9Zp8bSLd1bY2RZo7rfIM4I6gxkxqsleSlwH0FXNK6iITqMdT3/ybbjnLVcFO8CBwok2azW3SW/aEx1ckraeYSyf1KRuEX2Xnl9c7LGgiIiOoj1a6f9OdZ/trW+Qj7Sbgg0FpD5Tk45T4J1pPMZdO6q6Z/2Xv9mP2TeCp4KFEZCQN0EpvW2arXR2cKn/Rzrt9MLjHgJTsM/8XMhlyx5x/7XC3nN3FqTscZNdBFxFpW2vLV6bNt0ZB4deDcAmtvU0qfbGZaLljzk/q52cs+7o5KBGRsdclgd5qW9o7bRnMofETfJe/cewosU+0XDHXTuqLM2bYuYu23BWUiojAVXbBmrRLgpIhUiteJkjXmGsn9VcBK4LdWoPw/wtKRURaF3W6PnIczgVWBqVzQAlexlzXmGsn9diM1SeAbwWlIiLbXBX54r+ow6IZc0YJXsZUx5ibsQlyp0Zeu/s2sC4oFRHZ5gm71PKbU8fk+DIdIz+xj/K4tL6gSLeYcy3142ytWZ/rs/+Jjp6I5HBLZBd31szuQWkJjGrrXQldPJkx51rqrw2qWtdDbwSlIiKh24HVwFKvZpnNyr052Lsk0klSM8tlhGTGnGupHxp5HfcA64NSEZHQ08B9QSm8KSgpsTKPwauVLimZMTdjM9/TfhOUiIhkezxSUw1KRkRZxuCVzKWDaMzNZATe/UGJiEi2f0RqkqBkBCmxSklFY65iy8z5NtiYuohIXo9F9lsYlIhIUaIxVwmK4DmdyiYiPXY7xxoC6QaDiBQnGnMuqU+nCl1L/aVgVxGRbJsiNYuDEhEpSjTmYi11dwGX2aBURMbCkMaI9ZkhMreiMRdL6vMyykVEsqR7/NAVHkWGKhpzLnm/nCpcrAkuItKj3SK7N4MSESlKNOZiY+pLgOXBriIi2Q6J1MwEJSJSlGjMuaT+bKrQJfmDg11FZOL0MAN+/6CkteqViAxHNOYqGWu8vyUoERHJtiJSo+53keGJxlwlY/3Yt0W65UVkTBQ8Az7rwlB/DEpEZKgx55L6I0ExrAT2CUpFRELH22eG70XgzmBPESlCZsy5pP5gZLEZtxLUG3XoRSTHuPr5kdNgH83oBRSRwWXGXMUu3vJA5Ck+EpSIiGzPdQOeFJS2ut51nrpI8TrGXMUC7/qgGk4ATg9KRWQsFDSufhawX1AKPwtKRGToMdduvv/C+uPTPhyUiIi0vAJYDUyljsdfgR/qGIkUrmvMtZP6E5bY004G3h6UiojAORkLYFyX0UgQkcF0jbl2Ut8CXAZsTO3oTmv7WuRbgYhMkMhkub2AKyJHYC1wa1AqIoPKFXP+7LmHMrrMXm3NfRGZYC6xtzegbh8yaZ8HnglKRWRQuWIuPSX+K8BzwV3g08ApQamITJxmtXYxcF7kdT8G3Bhp1YvIYDrGnF+QTupuSvzVwd1absxYwUZERlSvM+Cb1dpb7WyZ9JCcu9rj5UmjvoF4d72I9KdjzAEb/MLYVZSuAc4GjkiV7wmsAU4EngzuJSJjrVmtHQf8KOM1XpM06mv8Aj+xF7wsrcik6BhzlpO3k26pO+uBVcB/ghqoAr+ycXYRmRDNau0dwG3Aosgrdj18VwWlHm8sXkTy6SvmYkkdmzTnVpR7IahpTae/w053E5ERlifRNqs19yX/BxmXenRXYjs/adTXBjURSu4iuXSNOZv1Hphae+ClQaHnIuCbQWnLZpte/6WgRkRKr1tybVZru1iMXx5Utrgv/WcnjfpPg5oBqKteJliumAMyYy6rpd52A3BJUNoybae63QUcG9SKSGnlSOjvAu7p8OHihunOKTqho0l2MrlyxVynhE6Olnrbh4Br7eptMW7Rmtttht5vI/UiUhKdkmazWjsDuMDWl87iZtuelzTqP86oL4Ra7DIhcscc0DXm8iZ1rCvene62NKjZZha4GbjJLun6dLCHiOwwsYTerNb2AQ63eTSnBjts7+/A+5JG/e6gZgiU2GVM9RxzQK6Yi53SluUG6xq4pcP56lM2wL/KBvPvsUl1d9kftqPMRp53toff0z+LKovdjv2tIgNzCb1ZrblhsyXAQcBbbIbtMcDiHI9/J/CBpFH/Z1AjIlkGjjkgd8z10lJvW2IrzH0CmBfUxs3OQat9yr6kVGybtrKK/fQ3vBP50wl11iub8h4nK/F2Svidfk/XZUnvs7DDY2yMlKX5Cxh02m8U9ft6hnEcpu1/5R77ebtdSV3oJPbe6cV8m7C6JfWYm4B1tm30Ht/F6zJbcyLp4XncKpOfc8Nr7cVl5kqzWltgF5V6nc0E3ts+DCuRxTja8pZn7ddNr/cb9v5F6/X92Gn/rLqs8iyzXe4za6d+HWiLsrie4l2BBV7u2WLb5jm81v/AMZdeXKabfpJ6m7tI+8dtcF9Exs8GmytTTxr1B3bUq2tWa/PtC9Ie9rnzXuBImyksMk62xhzQV8wNktTbTrEp+MfmmE0vIuX3ss2wXZ006n8o01/brNZmbPErd1XJMzMW5hAZNVtjDhgo5opI6lgyP9K+QbttebCHiJTdw8B33bKUSaP+l7L+rc1qzX3eHAZcCZwG7BTsJDIatsYcUEjMFZXUfctsVt9RwNH2+9I5uCZ7e0x92tumvLFMkTLpND7Yy3seGyfclBo/72SLtQz+bV1899oqkvcmjfr6DvcrDeuSP92WyjxY7+yJN5vKMW7M3H32Oy95Ze33vtvmUmbM2fnnxQD+D+qwDiwe+wIIAAAAAElFTkSuQmCC"
                                        ></image>
                                </svg>
                                <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete='off'
                                placeholder="QUAL SUA CIDADE?"
                                value={formData.city}
                                onChange={handleChange}
                                />
                            </div>

                            <div>

                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                               
                                    height="60"
                                    viewBox="0 0 501 60"
                                    >
                                        <image
                                       
                                            height="60"
                                            data-name="Camada 6"
                                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAA8CAYAAAB/2CPZAAAIi0lEQVR4nO3dC4xcVRnA8f9uWywplBaKAmIhLVJRREWRl2kkRRRUwJhYQYgo2jQYTQyCj/iIJiRFxRhUIqLEyKskpqCilSCmxIjVVBB5BAEJ1vhqawtKW1q6u+bYb8jtPedOZ3dnZwf6/yU3M/OdM3PvzD6+ued1B9bPu5gJMgt4HXAccBjwWmA/4KCJ2uEoTAEGC7et7flupLJReDxQea8DtffaqjMMDMXtcMQHCvU6vT/W56jZ/sDW2KQ9Xco5g/E/ZFPl8cYefS6DsU8q+3wG+DuwGfg18E/gHuD3UdZ13U7qC4B3A8dGMp+b1ZAkac/2SCT23wDLgfXd+jS6ldRPBC4EFgP7ZKWSJKkknclfB/wAeKhQPirjbWpOyfx24O5I6iZ0SZI6dwjwSeDeSO4LxvPZjSepXwbcBZyWlUiSpNHYCzgP+C3wLWDGWD69qVmkM9OBc4Bpu6m9Dfgj8Hj0GaTtyaxW7w10uFGpR+GWwkCzphgNg8BKg8RKt63YyXGbfgF2xNYqX1V4zfrzS4PlpsRGDI4bqgySqz9/d8Zbrymu3Iz4G9uRlUh7nhcBJ8Xfw6/i8dQYpNYLA5EbR2IQ3JRovU4DxA8AXgK8CjiyTY4g6l8EvAb4AnBnVqONsSb1gfinX5KS9h+AFdE0/0ihjiRJ3fbNPv9E08nYMcDZwNuBo9vk4XQCtxL4FPC1rLTBWJvf0xSan9di/wGWxUGeAnzDhC5J0nO2A2uAz8YssdSycGubjye1hl8BXB8tD7s1ntHvM4EPRid/mhN4C/BwVkuSJLWzCPgocFabOssj57Zdl2IiF5+RJEmdWxoj4Q9veMbNwIeAp7OS8EJYPU2SpBeCbwMLY2GaksUxn72RSV2SpP7x10jsNzQc0buAz2XRYFKXJKm/bAHOB77ScFRpqtvpWdSkLklSX0rz3S+Nke91aQ785cDsekE9qaf55x+OleKuGe9ydZIkaVwujKXY615dmr9eT+qfAL4T7flphN1tMWVNkiT13vZYrObRwp7PjeReTOppObsltSccEddBlyRJk2N99KPXpRXqvlxdsr2a1C+IJF7XtBysJEnqjZtiq3tbLD27S1JPq8NdklXdeW3XUlu+JEnqrWWVC21VLa0n9aOAuVk1+D7w3ywqSZJ6LV319OrCPhe3Bra3kvoHsiqwFvheFpUkSZNlWeFke1/gfa2kngbInVE4uPRtYGMWlSRJk2VtXN687oRWUj8eeFmtcDims0mSpP5yY+Fo0ky1Awbrc9zC34A/Z1FJkjTZVhRa0g9MI+FTUn9F4eBWA5uzqCRJmmzrgHsKx/CmwRj5Xrcqi0iSpH7xeOE45qekPj8LlzvhJUlSf/hL4SjmDMYyc1Vbok9dkiT1p8cKR7V36dKrTxU64CVJUv8onXzvNRjXZa1KZ+rPZlUlSVK/2FY4jpmlM/WhuDi7JEnqT8U8XUrq0xrikiSpP9Rb2ZOhlLx31ILpim17Z1UlSVK/2K9wHBtKfeqzgIOzqpIkqV8cWTiOqSmpP1kLpiT/8qyqJEnqF4cXjmPdYMMa7wuziCRJ6hdzC8fx/+b30vqxpxaa5SVJ0uSb2nAxtjUpqf8pC8MC4NAsKkmSJtsJkaertgN3pKR+f2GxmbR07Mn+2CRJ6jsXFKaeP5pa3gfj4i33FY74I1lEkiRNptT0vqiw/zWteeppBbmrs2I4CXhHFpUkSZPlbOCwwr5/RuX0/RfRHl93URaRJEmTYTZwGTBQ2/eDwK3VpL42EnvdacBbsqgkSeq19zQsOnNV68S8ldSHgUuAZ2oV07S2rxe+FUiSpN45BPh8YW/rgZtaD6qj5x5qnb7XvDJO9yVJ0uT4aiT2ui8Bm0pJPbkCeCp7CnwaOD2LSpKkibYEeG9hH48B11YD9aSehsRfnj1tp2sbVrCRJEkT45SYoVbvBk9XWL0U2NIuqSdXAvdmUTgIuAV4aVYiSZK67XjgRw2veWXk5F2Ukvpm4Dzg31kJzAd+Gf3skiRpYrwVWA7sW3j11Kq+LIs2JHVi0FxaUW5rVrJzOP3KmO4mSZK6K51Y/7Dh8qobYpnY9VlJm6Se3Ax8LIvuNDdWr/lMViJJksZiRoxruw7Yp/D8rZHQH8xKQruknnwXWJpFd5oSU93uBt6YlUqSpE6dCayOwW8lm2PxmZ8Wyp6zu6ROjLpb0rCMbHIicBdwA7AwK5UkSU3eGQPe0oC4oxvqpBHu5wC3ZSU1nST15JroY9+Ylew0HTgXWBXNBukKMi/OakmSpEOBM+Ks+8dxkZYmTwCnAj9pKN/FwPp5F2fBNtK3iBs7nK++IZoSVkYT/RNZjd4ZKexpZBT367fdipUel45VkvT8lLqqZwFHRGt2GtV+HDCzg3dzB/B+4B9ZSYPRJnXi4NIKcx8HpmWlZSlRrSuWdM9AXGd2MLYpERuM2+pGZSJ/PaGOVGLDlcf1+8O1+6VY6X799Ur7rd+v3h4Vt1PjNYYqx/9A4T2100m9btUZy+v2y3H04otW0/UVmuLJHOBpYNs4X6edpudNdLwXx9ZUb6z7bTLR9butm3+bTWVN8SYju3nOSEz9mheLstwfA82mV3LPcOV/5lD2ChMj5cgDY52XOaPYQ1rZ9YvR/b0lK21jLEm9ZVGMjj8zK5EkSaOVEviKWOf9vrF8ep32qZfcCZwV/QKr4xuQJEkanR0xUO7NwPljTehEE+54pT7z24FjY3Re2g72BypJUlsPA9dHQn+gXcVOjaf5vUnqPzgGeD3whri/fw+uyd7qU59S2Qbi/nhaJJqU+tpHanE66DsfrdmV91t/jU1jeD1NjKbf907ind6fEb9fpZUfm/qPm+JNmsrH2m/d6f6b4lLJSO13JvWZp//9ybOVWPp7SWfFaeul1n7/FWfhv4uVW9Ntmn/eHcD/ANg1tz7b2bz1AAAAAElFTkSuQmCC"
                                        ></image>
                                    </svg>
                            
                                    
                                    {/* resp´here */}
                                    <svg className={styles.svgHereResp}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="280"
                                    height="60"
                                    viewBox="0 0 280 60"
                                    >
                                        <image
                               
                                            height="60"
                                            data-name="Camada 6 copiar 4"
                                            xlinkHref="data:img/png;base64,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"
                                        ></image>
                                    </svg>
                                <select
                                className={styles.twerkLevel}
                                name="Genero"
                                defaultValue={formData.genero}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                             
                                >
                                    <option value="" disabled selected hidden>QUAL SEU GÊNERO?</option>
                                    <option value="Masculino">MASCULINO</option>
                                    <option value="Feminino">FEMININO</option>
                                    <option value="Outro">OUTRO</option>
                                </select>

                            </div>

                            <div className={styles.textAreaDiv}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="501"
                  
                                viewBox="0 0 501 160"
                                >
                                <image
                          
                                  
                                    data-name="Camada 7"
                                    xlinkHref="data:img/png;base64,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"
                                ></image>
                                </svg>
                                <svg className={styles.svgHereResp}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="280"
                                height="160"
                                viewBox="0 0 280 160"
                                >
                                <image
                       
                                    height="160"
                                    x="-221"
                                    data-name="Camada 7"
                                    xlinkHref="data:img/png;base64,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"
                                ></image>
                                </svg>
                                <textarea
                                id="twerkDefinition"
                                name="twerkDefinition"
                                autoComplete='off'
                                placeholder="O QUE É TWERK PARA VOCÊ?"
                                value={formData.twerkDefinition}
                                onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className={styles.sendForm}>
                                <h3>OBTER O CURSO!</h3>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="280"
                                height="60"
                                viewBox="0 0 280 60"
                                >
                                <image
                                    width="450"
                                    height="60"
                                    x="-85"
                                    data-name="Camada 9"
                                    xlinkHref="data:img/png;base64,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"
                                ></image>
                                </svg>
                            </button>
                            </form>    
                </div>

            </div>
      </div>

     )}
    </>
  )
}
