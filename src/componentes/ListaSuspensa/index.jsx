import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>
                {props.label}
            </label>
            <select>
                {/* cria uma lista novo e devolve os dados dela */}
                {/* sempre que usar o map tem que usar a key */}
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa