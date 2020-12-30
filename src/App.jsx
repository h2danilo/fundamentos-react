/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'

export default (props) => 
(
    <div className="App">
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParametro 
                titulo="Esse é o titulo" 
                subtitulo="Esse é o subtitulo"></ComParametro>
        </Card>
        <Card titulo="#03 - Componente com Filho">
            <ComFilhos>
                <ul>
                    <li>Danilo</li>
                    <li>Arthur</li>
                    <li>Ma</li>
                    <li>Renan</li>
                </ul>   
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Exibindo Lista objeto">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={10}></Condicional>
        </Card>
    </div>
);
    