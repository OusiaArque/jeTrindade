import styles from '@/styles/components/Footer/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className={styles.JeconvertFooter}>
        <h3><span>TWERK ACADEMY</span> com</h3>
        <strong>Jé Trindade</strong>
      </div>
      <footer className={styles.mainFooter}>
        <div className={styles.FooterContainer}>
           
              <ul>
                  <div className={styles.DivOne}>
                      <Link href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="138"
                          height="231"
                          viewBox="0 0 138 231"
                        >
                          <image
                            width="138"
                            height="231"
                            data-name="TWERK ACADEMY_PRETO"
                            xlinkHref="data:img/png;base64,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"
                          ></image>
                        </svg>
                      </Link>
                      <div className={styles.LinksFooter}> 
                        <Link href="">
                          
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
                              data-name="Camada 7 copiar"
                              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC8klEQVRIib3XW4iVVRQH8J/HyZrMyrRxIjIwi7xQPUgXKuohKkpNQvLBIIrU8CGYIDEifIiiqxQ9BHZTukCXhyAx1Aiph3yQfDSCzC5PESV0mYicE4tZh77OPt/5ZnD0D4cNe6+9/3ut9V9rf2faFUuWSpyJtViBszBmajANbRzEdnwZpw7k0TE+iPtx4RQRduMyLMKmuEQL8XsMj59AUhnRm9LrhdOHh4aW4UWcXpieGMzDaHgbxHNOEmkHN0ZuB4vpEqP4Gf+kWOrQzpA2OTJvoEG9f+FtPInDxWpvnIo1eBSX9LTg2EAx9R9GU+Xv4FLciVMaLhrR+BVvYQ/eTEEV6Ef8dJJGbT8xScV/gHuwAXuxoNugVWwZx/d4LevulUmQvoq7cCWeyfR8WFj1If4Rv4f6eojvW2zFatyajWdPCu8jvI/PsR7TO52qG3WhHst8nds1/wXuw1e5N2p/N17CQ9iC23BLCAhnp0Db3dVQR9wxqgrp61TrDxjByozG4dRAROGcVHPgaMWBAnXEvbAtSR9O4XUOvAqLcTOexx1YWkfYQV2OuxH5+xSz8UCPQy/PFEQp7St2HwfxH/gFM3FesTqOhTn+WawcB/EZuCA9OlSsjmN/jhPq+xMljrK4PT3fmmMVu7AD87PEGjEZca3DzuzdEfZ7MxIH8FSWTyj6/MqeWoHVEbd7bJyTXo1ko/i4shadbXM2jWqU2nmhAnXEM5L0SNf8RXgXn2Su/84mc32WVBU/4bes7cLzOuIFeeDubBDVJj+YH4Qril3/x3NZhtcVK32I5+Z32N3Zk1/AkrSvtr/OF2R1LvL/Bl7GtVhenN6HWD6H0akeycfiapzW8B638hGJFF2TL9vcwqqBWAomCN/DZ5m3Il8VhOcX52VXYaiwqBA31XJ4e0M+k+1itcSMjEw/tAayGzUhvJzVYDMZHGllCL+bwkMngp1B/E3+rYiaOxmI5vN6R1whnsBGDE/hH7YOIlXRwaKnP4uj/wIib5ABIU3u4AAAAABJRU5ErkJggg=="
                            ></image>
                          </svg>
                          
                          
                        </Link>
                        <Link href="">
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
                              data-name="Camada 8 copiar"
                              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAACNklEQVRIib3XuWtVQRTH8U9MUKO4hECIW6GCWywiooULptPKwkYsxEYLtdBK/A/sLMQNsRIV3BDtbFTcQAVBRC1ERGwUt8IFTaKRgRMY3vXdd7N+YXj3zD1zfvfMnDt3XlN313LBCuzGRrThr9HlDa7gOL60ROgenMWcURbL6Y62EjubOzs6OnAKXQXXsWEJvk/AMqweJ9FBtqepXoiWwq1q9OJbeKYkZsRvI9pbKjrW4wEOoAmTcQ5z6/jmDCThgUJ3dT7jceb9pKrwSLL1nyU6HNPfkJEK13IH+2MmShluUdUjLdsJPMVmrMPa//mOtvAgD6LtqCc81KlO6/cWH8Juyu5NxXo0Z32/ChGCqhl/xQXcxAuswsma8a04g7u4gXdYWog0BOGX2ItbWd9M/KnJuDfibY+WCmxiIVpF4U/Yhfs1/a0hmu8Bye7L7PZCtCEIn6wRTXv6tpjCiZH1sCgT7sf1zN6Ai+jI+ob9zS6r6vd4ndkHa0QbjS+lbGB/tEGmFDz4nV0PKfsy4VmYl9lHax4kre/VzG5rVFA5ZWs8CZvwPOxLUc1b4oGv4XzmvxXTC1HqUCYs3t9UYK/CThvE5Xh1fmR+i+KgWJmyqU7Mj/PYoqzvZ43oApwO38pU2bl6IutjuBdb4UB88NdgD5YXRjWg6tFnMY7EK/YmKjhlOLvgWY2mliof7YzOaCOlL2X7LDIZTx4m4VSxaf3Gi484lP5JJONRbAipeqeN4ROkU+g+3P4H4/9kYv3elrwAAAAASUVORK5CYII="
                            ></image>
                          </svg>
                        </Link>
                        <Link href="">
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
                              data-name="Camada 6 copiar"
                              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACC0lEQVRIie3XS4iNYRzH8c+cOWYaGpeFoUQpC0KxIAmlFEophZJkKbZWdizEjrIhe5elsmJjIQts7CzksmExuWVhmIv+PKfeznvOmed9OzMr33rrfa6/53/+l+c9A1s2bpLYipPYhgZm9IfY6zse4C6+xK7NtPUpXMOyPol14gBO4DTexGl24foci7YIrRtYGsJn46U0Ze7Yj50ti+eTAWwPHy+oIRqB9xgvUuAsxDBW43gKqF4sCuHpHhM6MYEruIxfbeMbcDRDeKpZ6pqdR7jYJd2y07CqcFh4r23zkfAZlmN9hrW1hMfxrNCO+LiE86WZs5B1ugJT+FFoL66bFVWFw8LBQnsgPZXJ+akjir+mQ35qy4J4/5xcMJ1Saklphw7kCD/EBQyl4BovjH3DOYymAx7G1dIONYVD6HWp9x/h87eF9nBpRhdyfDxY6unOjq4jbeRYHLfW2hRYv/EhWSodfFUqmeGKdaXVXcgRPoS9Sfg99qUgk26129id/D9aWt2FHOGh9LSsL7qnkXJ5JD3Z1CkgxXIZ75OlWRlUFe4b/4XnVbiK+EzK5RaTNb5g/uo2CsUgl2Ila9a8nSZi4VMcKw11ZgXu42eyPvJ7c8eZvXkewrdwJLOYxCWwp9RbjSdh7ODKsbG4XeJOjQJfqfrU4CXO4F3LyjtYg4OpJvfrD1uLiKWPuIlX8AfaulU0Gc9sZgAAAABJRU5ErkJggg=="
                            ></image>
                          </svg>
                        </Link>
                      </div>
                  </div>
                  <div className={styles.linksForFooter}>
                    
                      <li><Link href=""><h6>Voltar ao <span>TOPO</span></h6></Link></li>
                      <li><Link href=""><h6>A <span>PROFESSORA</span></h6></Link></li>
                      <li><Link href=""><h6>Sobre o <span>CURSO</span></h6></Link></li>
                      <li><Link href=""><h6>O <span>CONTEÚDO</span></h6></Link></li>
                      <li><Link href=""><h6>Twerk <span>ACADEMY</span> </h6></Link></li>
                      <li><Link href=""><h6>Tire as <span>DÚVIDAS</span> </h6></Link></li>
                  </div>
              </ul>
          
        </div>
      </footer>
      <div className={styles.posfooter}>
        <h6>Todos os direitos reservados TWERK ACADEMY 2022. </h6>
            <Link href="">
              <img src="https://baldoo.com.br/API/imageAPI/jessica/lablogo.webp" alt="" />
            </Link>
      </div>
    </>
  )
}
