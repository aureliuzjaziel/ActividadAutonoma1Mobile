

export const Arreglo = () => {
    function SumarArreglo(arreglo: number[]):number {  
         let suma = 0;             
         for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }
        return suma;
    }
  return (
    <div>
        <h2>Sumar Arreglo</h2>
        <hr />
        <p>La suma de los elementos del arreglo [1,2,3,4,5] es: {SumarArreglo([1,2,3,4,5])}</p> 


    </div>
  )
}
