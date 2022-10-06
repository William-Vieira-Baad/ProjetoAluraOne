import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao'>
            {/* usamos o props.children para passar elementos filhos dentro de um componente */}
            {props.children}
        </button>
    )
}

export default Botao