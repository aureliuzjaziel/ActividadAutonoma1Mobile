
export const Alumno = () => {
    
    // interfas
    
    interface Alumno {
      nombre: string;
      edad: number;
      calificacion: number;
    }
  
    // objetos
    const alumnos: Alumno[] = [
      {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10
      },
      {
        nombre: "Wendy",
        edad: 20,
        calificacion: 8
      },
      {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9
      }
    ];
  
    // calcular el promedio
    function CalcularPromedio(alumnos: Alumno[]): number {
      let suma = 0;
      for (let i = 0; i < alumnos.length; i++) {
        suma += alumnos[i].calificacion;
      }
      return suma / alumnos.length;
    }
  
    return (
      <div>
        <h2>Promedio de los Alumnos</h2>
        <hr />
        <p>El promedio de las calificaciones es: {CalcularPromedio(alumnos)}</p>
      </div>
    );
  }
  


