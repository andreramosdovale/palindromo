import React from 'react'

export default function props() {
    return (
        <div>
            <h4>A palavra "{props.palavra}"</h4>
            {
                props.status === true ? <span>É um Palindromo</span> : <span>Não é um Palindromo</span>
            }
        </div>
    )
}

