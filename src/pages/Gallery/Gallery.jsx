import React from "react";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import style from './Gallery.module.css'


function Gallery(){
    return(
       <>
        <Header />
        <Container>
               <section >
                    <Title>PORTFÓLIO DE APRESENTAÇÕES</Title>
                    <div className={style.gallery}>
                        <div>
                            <a href="https://photos.app.goo.gl/4htThPsHpHsPXNgt6" target="_blank">
                                <img src="../images/Photos/IMG-2023-19.jpg" alt="..."></img>
                                <h3>Temporada 2023</h3>
                            </a>
                        </div>
                        <div>
                            <a href="https://photos.app.goo.gl/i5ftoD3erjNfudK47" target="_blank">
                                <img src="../images/Photos/16.jpg" alt="..."></img>
                                <h3>Temporada 2022</h3>
                            </a>
                        </div>
                        <div>
                            <a href="https://photos.app.goo.gl/VvTkMvejtyoWkAhs6" target="_blank">
                                <img src="../images/Photos/IMG-2021-00.jpg" alt="..."></img>
                                <h3>Temporada 2021</h3>
                            </a>
                        </div>
                    </div>
               </section>
            
        </Container>
        <Footer />
       </>
    )
}
export default Gallery