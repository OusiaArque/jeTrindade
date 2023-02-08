import styles from '@/styles/components/Main/Main.module.css'
import Link from 'next/link'
import { useState } from 'react';
export default function Main() {

 
return (
    <>    
      <main className={styles.mainConvert}>
        <div className={styles.mainConvertContainer}>
            <img src="https://baldoo.com.br/API/imageAPI/jessica/jessivaimg.webp" alt="" />
            <div className={styles.MainConverth1}>
                <h1>VAMOS SOLTAR A RABA! 
                <span>Curso <strong>GRATUITO</strong> para <br />
                iniciantes no TWERK!</span> </h1>
                <br />
                <br />  
                <Link href="">
                    <div className={styles.MainButton}>
                        <h3>CLIQUE AQUI PARA TER ACESSO AO CURSO</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        
                            viewBox="0 0 501 60"
                            >
                            <image
                            
                                data-name="Camada 10"
                                xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAAA8CAYAAAB/2CPZAAAIi0lEQVR4nO3dC4xcVRnA8f9uWywplBaKAmIhLVJRREWRl2kkRRRUwJhYQYgo2jQYTQyCj/iIJiRFxRhUIqLEyKskpqCilSCmxIjVVBB5BAEJ1vhqawtKW1q6u+bYb8jtPedOZ3dnZwf6/yU3M/OdM3PvzD6+ued1B9bPu5gJMgt4HXAccBjwWmA/4KCJ2uEoTAEGC7et7flupLJReDxQea8DtffaqjMMDMXtcMQHCvU6vT/W56jZ/sDW2KQ9Xco5g/E/ZFPl8cYefS6DsU8q+3wG+DuwGfg18E/gHuD3UdZ13U7qC4B3A8dGMp+b1ZAkac/2SCT23wDLgfXd+jS6ldRPBC4EFgP7ZKWSJKkknclfB/wAeKhQPirjbWpOyfx24O5I6iZ0SZI6dwjwSeDeSO4LxvPZjSepXwbcBZyWlUiSpNHYCzgP+C3wLWDGWD69qVmkM9OBc4Bpu6m9Dfgj8Hj0GaTtyaxW7w10uFGpR+GWwkCzphgNg8BKg8RKt63YyXGbfgF2xNYqX1V4zfrzS4PlpsRGDI4bqgySqz9/d8Zbrymu3Iz4G9uRlUh7nhcBJ8Xfw6/i8dQYpNYLA5EbR2IQ3JRovU4DxA8AXgK8CjiyTY4g6l8EvAb4AnBnVqONsSb1gfinX5KS9h+AFdE0/0ihjiRJ3fbNPv9E08nYMcDZwNuBo9vk4XQCtxL4FPC1rLTBWJvf0xSan9di/wGWxUGeAnzDhC5J0nO2A2uAz8YssdSycGubjye1hl8BXB8tD7s1ntHvM4EPRid/mhN4C/BwVkuSJLWzCPgocFabOssj57Zdl2IiF5+RJEmdWxoj4Q9veMbNwIeAp7OS8EJYPU2SpBeCbwMLY2GaksUxn72RSV2SpP7x10jsNzQc0buAz2XRYFKXJKm/bAHOB77ScFRpqtvpWdSkLklSX0rz3S+Nke91aQ785cDsekE9qaf55x+OleKuGe9ydZIkaVwujKXY615dmr9eT+qfAL4T7flphN1tMWVNkiT13vZYrObRwp7PjeReTOppObsltSccEddBlyRJk2N99KPXpRXqvlxdsr2a1C+IJF7XtBysJEnqjZtiq3tbLD27S1JPq8NdklXdeW3XUlu+JEnqrWWVC21VLa0n9aOAuVk1+D7w3ywqSZJ6LV319OrCPhe3Bra3kvoHsiqwFvheFpUkSZNlWeFke1/gfa2kngbInVE4uPRtYGMWlSRJk2VtXN687oRWUj8eeFmtcDims0mSpP5yY+Fo0ky1Awbrc9zC34A/Z1FJkjTZVhRa0g9MI+FTUn9F4eBWA5uzqCRJmmzrgHsKx/CmwRj5Xrcqi0iSpH7xeOE45qekPj8LlzvhJUlSf/hL4SjmDMYyc1Vbok9dkiT1p8cKR7V36dKrTxU64CVJUv8onXzvNRjXZa1KZ+rPZlUlSVK/2FY4jpmlM/WhuDi7JEnqT8U8XUrq0xrikiSpP9Rb2ZOhlLx31ILpim17Z1UlSVK/2K9wHBtKfeqzgIOzqpIkqV8cWTiOqSmpP1kLpiT/8qyqJEnqF4cXjmPdYMMa7wuziCRJ6hdzC8fx/+b30vqxpxaa5SVJ0uSb2nAxtjUpqf8pC8MC4NAsKkmSJtsJkaertgN3pKR+f2GxmbR07Mn+2CRJ6jsXFKaeP5pa3gfj4i33FY74I1lEkiRNptT0vqiw/zWteeppBbmrs2I4CXhHFpUkSZPlbOCwwr5/RuX0/RfRHl93URaRJEmTYTZwGTBQ2/eDwK3VpL42EnvdacBbsqgkSeq19zQsOnNV68S8ldSHgUuAZ2oV07S2rxe+FUiSpN45BPh8YW/rgZtaD6qj5x5qnb7XvDJO9yVJ0uT4aiT2ui8Bm0pJPbkCeCp7CnwaOD2LSpKkibYEeG9hH48B11YD9aSehsRfnj1tp2sbVrCRJEkT45SYoVbvBk9XWL0U2NIuqSdXAvdmUTgIuAV4aVYiSZK67XjgRw2veWXk5F2Ukvpm4Dzg31kJzAd+Gf3skiRpYrwVWA7sW3j11Kq+LIs2JHVi0FxaUW5rVrJzOP3KmO4mSZK6K51Y/7Dh8qobYpnY9VlJm6Se3Ax8LIvuNDdWr/lMViJJksZiRoxruw7Yp/D8rZHQH8xKQruknnwXWJpFd5oSU93uBt6YlUqSpE6dCayOwW8lm2PxmZ8Wyp6zu6ROjLpb0rCMbHIicBdwA7AwK5UkSU3eGQPe0oC4oxvqpBHu5wC3ZSU1nST15JroY9+Ylew0HTgXWBXNBukKMi/OakmSpEOBM+Ks+8dxkZYmTwCnAj9pKN/FwPp5F2fBNtK3iBs7nK++IZoSVkYT/RNZjd4ZKexpZBT367fdipUel45VkvT8lLqqZwFHRGt2GtV+HDCzg3dzB/B+4B9ZSYPRJnXi4NIKcx8HpmWlZSlRrSuWdM9AXGd2MLYpERuM2+pGZSJ/PaGOVGLDlcf1+8O1+6VY6X799Ur7rd+v3h4Vt1PjNYYqx/9A4T2100m9btUZy+v2y3H04otW0/UVmuLJHOBpYNs4X6edpudNdLwXx9ZUb6z7bTLR9butm3+bTWVN8SYju3nOSEz9mheLstwfA82mV3LPcOV/5lD2ChMj5cgDY52XOaPYQ1rZ9YvR/b0lK21jLEm9ZVGMjj8zK5EkSaOVEviKWOf9vrF8ep32qZfcCZwV/QKr4xuQJEkanR0xUO7NwPljTehEE+54pT7z24FjY3Re2g72BypJUlsPA9dHQn+gXcVOjaf5vUnqPzgGeD3whri/fw+uyd7qU59S2Qbi/nhaJJqU+tpHanE66DsfrdmV91t/jU1jeD1NjKbf907ind6fEb9fpZUfm/qPm+JNmsrH2m/d6f6b4lLJSO13JvWZp//9ybOVWPp7SWfFaeul1n7/FWfhv4uVW9Ntmn/eHcD/ANg1tz7b2bz1AAAAAElFTkSuQmCC"
                            ></image>
                            
                        </svg>
                    
                    </div>
                    
                </Link>
            </div>
        </div>

      </main>
    
    </>
  )
}
