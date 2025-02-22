import React from "react";
import './Formulario.css';
import iconeemail from '../../../../Assets/Icones/iconemail.svg';
import iconcadeado from '../../../../Assets/Icones/iconcadeado.svg';

function FormularioLogin() {
    return (
        <>
            <div className="campos">
                <div className="email">
                    <div className="input-container">
                        <img src={iconeemail} alt="Ícone de E-mail" className="icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            required
                            className="input"
                        />
                    </div>
                </div>

                <div className="senha">
                    <div className="input-container">
                        <img src={iconcadeado} alt="Ícone de Senha" className="icon" />
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            required
                            className="input"
                        />
                    </div>
                </div>
                <p className="esqueceu-senha"> ESQUECEU A SENHA? </p>
            </div>

            <div className="botoes">
                <div className="botao-entrar">
                    <button className="entrar">
                        Entrar
                    </button>
                </div>
                <div className="botao-criar-conta">
                    <button className="criar-conta">
                        Criar Conta
                    </button>
                </div>
            </div>

            <aside> 
                
            </aside>

        </>
    );
}

export default FormularioLogin;
