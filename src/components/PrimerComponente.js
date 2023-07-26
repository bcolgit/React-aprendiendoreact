import React, {useState} from 'react';

export const PrimerComponente = () => {
    //let nombre = "Brian Orozco";
    let web = "mipaginaweb.com";

    const [nombre, setNombre] =  useState("Brian Orozco ")

    let cursos = [
        "Master en Js",
        "Master an Angular",
        "Master en Laravel"
    ]
     const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
     }
     
  return (
    <div>
        <h1>Mi Primer Primer Componente</h1>
        <p>Este es mi Primer Componente </p>
        <p>Mi Nombre es: <strong className={ nombre.length >=4 ? 'verde' : 'rojo' }>{nombre}</strong></p>
        <p>Mi Página web es: {web}</p>
        <input type='text' onChange={ e => cambiarNombre(e.target.value) } placeholder='Cambia el Nombre'></input>
        <button  onClick={ e => cambiarNombre("INSTRUCTOR BRIAN OROZCO")}>Cambiar Nombre </button>
        <button onClick = { e=> {
            console.log("El valor guardado de tu estado es:", nombre);
        }
          
          }> Mostrar el valor del estado </button>

        <h2>Cursos</h2>
        <ul>
            {
            cursos.map( (curso, indice) => {
                return (
                    <li key={indice} >
                        {curso}
                    </li>
                )
            })
            }
        </ul>
    </div>
  )
}
