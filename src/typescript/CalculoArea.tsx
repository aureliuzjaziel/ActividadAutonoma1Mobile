

export const CalculoArea = () => {

    function CalcularArea(lado: number):number {               
    return lado * lado;
    }

    
  return (
    <div>
        <h3>Calculo de Area</h3>
        <p>El area de un cuadrado de lado 5 es: {CalcularArea(5)}</p>
    </div>
  )
}

