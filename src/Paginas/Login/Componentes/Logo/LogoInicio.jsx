import React from "react";
import './LogoInicio.css';
import LOGOTIPO from '../../../../Assets/Imagens/LOGOTIPO.svg';

function Logo() {
    return (

        <>

            <div className="imagem-logo">
                <img src={LOGOTIPO} alt="Logotipo" />
            </div>

        </>
    )
}

export default Logo;