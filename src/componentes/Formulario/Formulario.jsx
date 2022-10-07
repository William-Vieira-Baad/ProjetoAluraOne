import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"
import { useState } from "react"

const Formulario = (props) => {
    // Lista que vai ser mostrada na listasuspensa
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (e) => {
        e.preventDefault()

        // Esse props esta vindo do app
        // Ela cria um obj para os dados colocados pelo usuario
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">

            {/* Quando o onSubmit acontecer ele vai exec a funcao aoSalvar */}
            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto
                    label='Nome'
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label='Cargo'
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label='Times'
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                {/* quando o componente recebe a props.children ele deve ter abertura e fechamento do componente */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario