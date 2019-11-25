import React from 'react'

const Greeting = ({ name }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            background: '#FFECC8',
            color: '#C45A01',
            borderRadius: 10
        }}>
            <div>
                <h1>Hello, {name}</h1>
            </div>
            <div>
                <img src="/dog.png" />
            </div>
        </div>
    )
}

export default Greeting