import React, { useState, useContext} from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h1>El token es {state.token}</h1>

            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>La sesion es: { state.sesion }</h2>
        </div>
    );
}

const Ejemplo3 = () => {

    const estadoInicial = {
        token: '12345567',
        sesion: 1
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSesionData({
            token: Date.now(),
            sesion: sesionData.sesion + 1
        });
    }

    return (
        <div>
            <miContexto.Provider value={sesionData}>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar Sesión</button>
            </miContexto.Provider>
        </div>
    );
}

export default Ejemplo3;




