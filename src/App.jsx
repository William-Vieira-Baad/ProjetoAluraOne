
import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Formulario'

function App() {

  const [ colaboradores, setColaboradores ] = useState([])

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}
      />
    </div>
  )
}


export default App

// const [count, setCount] = useState(0)
// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>
// </div>