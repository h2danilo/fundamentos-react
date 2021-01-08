/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => {

    function acao() {
        props.onClicar(Math.random(), 'Gerado (Alterar 1)');
    }

    return (
        <div>
            <button onClick={acao}>Alterar1</button>
            <button onClick={() => {
                props.onClicar(Math.random(), 'Gerado (Alterar 2)')
            }}>Alterar2</button>
        </div>
    );
};
    