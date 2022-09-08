import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Saludo = ({ name }) => {

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>Hola { name }</h1>

            <div>
                <h2>Tu edad es de: { age }</h2>
                
            <button onClick={birthday}>Aumentar</button>
            </div>

        </div>
    );
};


Saludo.propTypes = {
    name: PropTypes.string,
};


export default Saludo;

