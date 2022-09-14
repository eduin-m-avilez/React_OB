/**
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect} from 'react'

export default function EjemploTwo() {
    // Crear dos contadores
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const incrementarUno = () => {
        setContador1(contador1 + 1);
    };

    const incrementarDos = () => {
        setContador2(contador2 + 1);
    }


    //crear una referencia con useRef()  para asociar una variable con un elemento del DOM del componente vista HTML
    const miRef = useRef();

    //useEffect() para controlar el estado de los elementos
    useEffect(() => {
        console.log("cambio el estado")
    }, []);


    return (
        <div>
            <h4 ref={miRef}>Referenciando componente</h4>
            <h3>{contador1}</h3>
            <h3>{contador2}</h3>
            <button onClick={incrementarUno}>contador 1</button>
            <button onClick={incrementarDos}>contador 2</button>
        </div>
    )
}
