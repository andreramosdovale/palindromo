import React from 'react'

export default function Condicional(props) {
    return (
        <div>
            <h4>A palavra "{props.palavra}"</h4>
            {
                props.status === true ? <span>É um Palíndromo</span> : <span>Não é um Palíndromo</span>
            }
        </div>
    )
}

