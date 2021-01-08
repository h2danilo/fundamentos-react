import React, { useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    
    const [qtdeNumero, setQtde] = useState(+8)

    const [numeros, setNumeros] = useState(Array(qtdeNumero).fill(0))

    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(qtdeNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumerosNaoContido(a)
                console.log(a, e, novoNumero)
                return [...a, novoNumero]
            }, [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <div>
                <label htmlFor="numeroInput">Qtde Numeros:</label>
                <input id="numeroInput" type="number" 
                    value={qtdeNumero}
                    onChange={(e) => setQtde(+e.target.value)}></input>
            </div>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={() => {gerarNumeros()}}>Gerar Numero</button>
        </>
    );  
};
    