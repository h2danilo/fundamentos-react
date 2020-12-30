/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Sub from './Sub'

//ábaixo 3 formas diferentes de pegar parametros.
export default (props) => {

    function quandoClicar(valorGerado, texto) {
        console.log('Ação!');
        console.log(valorGerado);
        console.log(texto);
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};