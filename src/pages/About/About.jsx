import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title"
import style from './About.module.css'


function About() {
    return (
        <>
            <Header />
            <Container>
                <section >
                    <Title>NOSSA HISTÓRIA</Title>
                    <div className={style.about}>
                        <img src="../images/Photos/IMG-2021-00.jpg" alt="foto da banda" />
                        <p> A Banda Sinfônica de Catanduva é composta por aproximadamente 40 músicos de instrumentos característicos de tal formação, como: flautas, clarinetes, saxofones, trompetes, trompas, trombones, contrabaixo, piano e percussão. Seu objetivo é ampliar o acesso à música instrumental, através de shows de alta qualidade artística.
                            A Banda é referência artística no seguimento de banda sinfônica e no interior do estado de São Paulo, com músicos do município de Catanduva, busca levar a toda a população, cultura e entretenimento de elevado nível de performance artística.
                            As atividades do Coro Sinfônico e da Banda Sinfônica são abertas a todos os interessados em participar. Os ensaios do coro são realizados às segundas-feiras, das 20h às 21h, e aos domingos, das 8h30 às 11h30, para a banda, ambos na Estação Cultura. As atividades integram as Oficinas Culturais da Secretaria de Cultura de Catanduva.</p>
                    </div>    
                </section>    
            </Container>
            <Footer />
        </>
    )
}
export default About
