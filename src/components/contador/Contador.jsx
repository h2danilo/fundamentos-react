import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends Component {

    //FORMA 1
    /*constructor(props) {
        super(props)

        this.state = {
            passo: props.passo,
            valor: 0
        }
    } */

    //FORMA 2
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    //forma fazendo no mesmo componente
    /*render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo:</label>
                    <input id="passoInput" type="number" 
                        value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })}></input>
                </div>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }*/

    //forma utilizando componente externo (Display, botoes, PassoForm)
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Botoes 
                onIncrementa={this.inc}
                onDecrementa={this.dec}></Botoes>
            </div>
        )
    }
}