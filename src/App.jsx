import { useState } from 'react'
import './App.css'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'

function App() {

  return (
    <div className="App">
      <Banner />
      <Formulario />
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