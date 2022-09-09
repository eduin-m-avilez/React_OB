import React, { useState} from 'react';

export default function EjemploOne() {

    const contadorInicial = 0;

    const personaInicial = {
        nombre: "Jorge",
        email: "Jorge@gmail.com"
    }

    const [contador, setContador] = useState(contadorInicial);

    const [persona, setPersona] = useState(personaInicial);

    const iniciarContador = () =>{
            setContador(contador + 1);        
    }

    const disminuirContador = () =>{
        setContador(contador - 1);
    }

    const cambiarUsuario = () =>{
        setPersona({
            nombre: "Pedro",
            email: "pedro@gmail.com"
        });
    }


  return (
    <div>
        <h1>Contador: {contador}</h1>
        <h2>Usuario: </h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Email: {persona.email}</h3>

        <button onClick={iniciarContador}> Aumentar </button>
        <button onClick={disminuirContador}> Disminuir </button>
        <button onClick={cambiarUsuario}> cambiar usuario </button>
    </div>
  )
}
