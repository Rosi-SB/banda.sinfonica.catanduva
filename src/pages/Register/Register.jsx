import React from "react";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import style from './Register.module.css'


function Register(){
    return(
        <>
            <Header />
            <Container>
                <section className={style.register}>
                    <Title>TORNE-SE MEMBRO BANDA SINFÔNICA DE CATANDUVA</Title>
                    <div>
                        <img src="../images/1.jpg" />
                        <div>
                            <button>Clique aqui para fazer sua inscrição</button>
                        </div>
                    </div>
                </section>    
            </Container>
            <Footer />
        </>
    )
}
export default Register;