import React from "react";
import style from "./Forms.module.css"

const Forms = () =>{
    return(
        <form action="#">
            <div>
                <a href="#">
                    <img src="/images/BSC-png.png" className="logo d-inline-block align-top" alt="Logo" />
                </a>
                    <Title>Formulário de Inscrição</Title>
            </div>
                    
                
            <div>
                <label for="input"></label>
                <input type="text" placeholder="Nome Completo"></input>
                <div>
                        <fieldset>
                            <legend>Gênero</legend>
                            <div>
                                <div>
                                    <input type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                    <label for="gridRadios1">
                                        Feminino
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input  type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                    <label for="gridRadios2">
                                        Masculino
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input type="radio" name="gridRadios" id="gridRadios3" value="option3"></input>
                                    <label for="gridRadios3">
                                        Prefiro não informar
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div>
                            <label for="input"></label>
                            <input type="date" placeholder="Data de Nascimento"></input>
                        
                            <label for="input"></label>
                            <input type="text" placeholder="Cadastro de Pessoas Físicas (CPF)"></input>
                            
                            <label for="input"></label>
                            <input type="tel" placeholder="Número para contato"></input>
                        
                            <label for="input"></label>
                            <input type="email" placeholder="Email"></input>
                       
                            <label for="input"></label>
                            <input type="text" placeholder="Instrumento Musical"></input>
                        </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Forms