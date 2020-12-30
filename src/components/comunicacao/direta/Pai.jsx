/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Filho from './Filho'

//ábaixo 3 formas diferentes de pegar parametros.
export default props => 
    <div>
        <Filho {...props}><strong>Arthur</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Danilo</Filho>
        <Filho sobrenome="Valim">Renan</Filho>
    </div>