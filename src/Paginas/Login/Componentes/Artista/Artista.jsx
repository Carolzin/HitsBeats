import React from "react";
import './Artista.css';
import justinbieber from "../../../../Assets/Imagens/justinroxo.svg";

function Artista(){
    return(
        <>
        <div className="artista-container">
            <div className="imagemn-artista">
                <div className="justin">
                    <img src={justinbieber} alt="Capa do album Purpose Justin Bieber" className="img-justin" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Artista;
