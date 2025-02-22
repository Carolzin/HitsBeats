import React from "react";
import Logo from "./Componentes/Logo/LogoInicio";
import FormularioLogin from "./Componentes/Formulario/Formulario";
import Artista from "./Componentes/Artista/Artista";


function Login(){
    return(
        <div>

        <Logo />
        <FormularioLogin/>
        <Artista/>

        </div>
    )
}

export default Login;
