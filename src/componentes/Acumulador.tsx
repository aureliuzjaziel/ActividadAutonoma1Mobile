import { useState } from 'react';

export const Acumulador = () => {
  const [acumulador, setAcumulador] = useState(0);


  const aumentar = () => {
    setAcumulador(acumulador + 5);
  }

 
  const disminuir = () => {
    setAcumulador(acumulador - 5);
  }

  return (
    <div>
      <h2>Acumulador</h2>
      <p>Valor actual: <small>{acumulador}</small></p>

      <button className="btn btn-primary"
      onClick={()=>aumentar()}>+5</button>
      &nbsp;
      <button className="btn btn-primary"
      onClick={()=>disminuir()}>-5</button>
    </div>
  );
}
