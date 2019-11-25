import React, { useState } from 'react'

const NavItem = ({ emoji, selected, whenClicked}) => {

    
    return (
        <li>
            <div
                onClick={
                    () => whenClicked(emoji)
                }
                style={{
                    background: selected ? '#F9F9F9' : 'inherit'
                }}
            >
                {emoji}
            </div>
        </li>        
    )
}

const Counter = () => {
    const [number, setNumber] = useState(0) // state
    
    const increaseNumber = () => {
        setNumber(number + 1)
    }

    return (
        <>
        <h1>{ number }</h1>
        <button onClick={increaseNumber}>Click!</button>
        </>
    )
}

// #7A40F2
// #F9F9F9
const Nav = ({}) => {
    const [selected, setSelected] = useState("🤔")
    const items = ["🤔", "🧖🏾‍♂️", "🗺", "🏚", "🌸"]
    
    return (
        <nav>
            <ul style={{
                listStyle: 'none',
                background: '#7A40F2'
            }}>
                <NavItem emoji="🤔" selected={"🤔" === selected} whenClicked={setSelected}/>
                {
                    items.map(i => <NavItem emoji={i} selected={i === selected} whenClicked={setSelected}/>)
                }
                {
                   false ? 'Hello' : 'World'
                }
            </ul>
            <h1>You clicked: { selected }</h1>
            <Counter />
        </nav>
    )
}

export default Nav