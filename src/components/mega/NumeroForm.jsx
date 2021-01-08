/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor="numeroInput">Qtde Numeros:</label>
            <input id="numeroInput" type="number" 
                value={props.qtde}
                onChange={(e) => props.onQtdeChange(+e.target.value)}></input>
        </div>
    );
};