/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";
import Mega2 from "./components/mega/Mega2";

export default (props) => 
(
    
    <div className="App">
        <h1>Fundamentos de React</h1>

        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#1FDA9A">
                <Primeiro/>
            </Card>
            <Card titulo="#02 - Componente com Parametro" color="#8C4646">
                <ComParametro 
                    titulo="Esse é o titulo" 
                    subtitulo="Esse é o subtitulo"></ComParametro>
            </Card>
            <Card titulo="#03 - Componente com Filho" color="#588C73">
                <ComFilhos>
                    <ul>
                        <li>Danilo</li>
                        <li>Arthur</li>
                        <li>Ma</li>
                        <li>Renan</li>
                    </ul>   
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Exibindo Lista objeto" color="#E94C6F">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#05 - Condicional" color="#FA6900">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#06 - Comunicação Direta" color="#6E9ECF">
                <Pai sobrenome='Albano'></Pai>
            </Card>
            <Card titulo="#07 - Comunicação Indireta" color="#354458">
                <Super></Super>
            </Card>
            <Card titulo="#08 - Input" color="#FFAC00">
                <Input></Input>
            </Card>
            <Card titulo="#09 - Contador" color="#982395">
                <Contador passo={10} valor={5}></Contador>
            </Card>
            <Card titulo="#10 - Mega" color="#E74700">
                <Mega qtdeNumero={8}></Mega>
            </Card>
            <Card titulo="#11 - Mega2" color="#E74700">
                <Mega2></Mega2>
            </Card>
        </div>
    </div>
);
    