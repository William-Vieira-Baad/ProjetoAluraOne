import { useState } from 'react'
import './CampoTexto.css'

const campoTexto = (props) => {

    // variavel criada para guarda os valores digitados pelo usuario no input
    // let valor = 'Guilherme'

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input

                // O onchange serve para pegar o valor digitado no input
                // Dentro dele passamos uma variavél
                onChange={aoDigitado}

                // Dentro do value passamos uma props para podermos usar em outros components 
                value={props.valor}
                placeholder={props.placeholder}
                required={props.obrigatorio}
            />
        </div>
    )
}

export default campoTexto