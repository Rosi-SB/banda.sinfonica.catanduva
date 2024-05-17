import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import style from './Contact.module.css'


function Contact(){
    return(
        <>
            <Header />
            <Container>
                <section className={style.contact}>
                    <Title>IMPRENSA</Title>
                    <div>
                        <img src="../images/Photos/IMG-2021-18.jpg" alt="foto da banda"/>
                        <p>Para entrevistas ou dúvidas relacionadas à imprensa, entre em contato diretamente pelo e-mail --------@---.--.--- ou pelo número
                            (11) 11111-1111, com o assessor de comunicação _________.</p>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}
export default Contact