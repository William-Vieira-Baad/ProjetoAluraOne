import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"

const Formulario = () => {
    // Lista que vai ser mostrada na listasuspensa
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação'
    ]

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log('Foi submetido')
    }

    return (
        <section className="formulario">

            {/* Quando o onSubmit acontecer ele vai exec a funcao aoSalvar */}
            <form onSubmit={aoSalvar}>
            
                <h2>Preencha os dados para criar o Card</h2>
                <CampoTexto
                    label='Nome'
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    label='Cargo'
                    placeholder="Digite seu cargo"
                />
                <CampoTexto
                    label='Imagem'
                    placeholder="Digite o endereço da Imagem"
                />
                <ListaSuspensa
                    label='Times'
                    itens={times}
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