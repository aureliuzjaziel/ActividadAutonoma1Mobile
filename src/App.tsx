import {DividirArreglo} from "./typescript/DividirArreglo"
import { Arreglo } from "./typescript/Arreglo"
import { CalculoArea } from "./typescript/CalculoArea"
import { Alumno } from "./typescript/Alumno"
import { Acumulador } from "./componentes/Acumulador"








const App = () => {
  return (
    <div className="container mt-2">
      <h2>Ejercicio 1</h2>
      <CalculoArea />
      <hr />
      <h2>Ejercicio 2</h2>
      <Arreglo />
      <hr />
      <h2>Ejercicio 3</h2>
      <DividirArreglo />
      <hr />
      <h2>Ejercicio 4</h2>
      <Alumno />
      <hr />
      <h2>Ejercicio 5</h2>
      <Acumulador />  









    </div>

    
    
  )
}


export default App
