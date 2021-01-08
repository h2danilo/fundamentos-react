/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import Sub from './Sub'

//ábaixo 3 formas diferentes de pegar parametros.
export default (props) => {

    const [texto, setTexto] = useState('Valor')
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        // console.log('Ação!');
        // console.log(valorGerado);
        // console.log(texto);
        setNum(valorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );
};