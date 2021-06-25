import React from 'react'
import rocket from '../rocket.gif'
import './Header.css'

export const Header = () => {
    return (
        <header>
            <div className="intro">
                <h1>Antonio Guerriere</h1>
                <h3>Web Developer</h3>
                <h5>Coming soon</h5>
            </div>
            <img className="rocket" src={rocket} alt="rocket" />
        </header>
    )
}


export default Header