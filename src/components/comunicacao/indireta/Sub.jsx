/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => {

    function acao() {
        props.onClicar(Math.random(), 'FIM');
    }

    return (
        <div>
            <button onClick={acao}>Alterar1</button>
            <button onClick={() => {
                props.onClicar(Math.random(), 'texto parametro 2')
            }}>Alterar2</button>
        </div>
    );
};
    