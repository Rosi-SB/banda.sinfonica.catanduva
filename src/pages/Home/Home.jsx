import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Banner from "../../components/Banner/Banner";
import Container from "../../components/Container/Container";
import Folder from "../../components/Folder/Folder";
import Carousel from "../../components/Carousel/Carousel"
import Title from "../../components/Title/Title";
import style from './Home.module.css'

function Home() {
  return (
    <>
    <Header />
    {/* <Banner image="capa" /> */}
    <Carousel />
    <Container>
      <section className={style.home}>
        <Title>Temporada 2024</Title>
        <Folder />
        <div>
             <p>20/10 (Sexta-Feira | Horário: 19:30h - Noite) Local:Paróquia São Sebastião | Ibirá/SP</p>
             <p>22/10 (Domingo | Horário: 10:00h - Manhã): Encontro de carros antigos - Local: Aeroporto | Catanduva/SP</p>
             <p>15/12 (Sexta-feira | Horário: 19:30h - Noite): Natal Luz - Local: Praça da Matriz | Catanduva/SP
          </p>
        </div>
      </section>
     
    </Container>
    <Footer />
    </>
  );
}

export default Home;