import React from 'react'


const PersonForm = ({f1, n1, n2, h1, h2}) => {
    return (
        <form onSubmit={f1} >
            <div>name: <input value ={n1} onChange={h1} /> </div>
            <div>number: <input value ={n2} onChange={h2} /> </div>
            <div><button type = 'submit'>add</button></div>
        </form>
    )
}

export default PersonForm