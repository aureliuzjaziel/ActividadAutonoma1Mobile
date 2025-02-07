

export const DividirArreglo = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const nuevoArreglo = arreglo.map(num => num / 5);

  return (
    <div>
        <h3>División de Elementos del Arreglo</h3>
        <p>Arreglo original: {arreglo.join(',')}</p>
        <p>Nuevo arreglo (dividido por 5): {nuevoArreglo.join(',')}</p>
    </div>
  )
}










