import './CampoTexto.css'

const campoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default campoTexto