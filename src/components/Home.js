import React from 'react'
import rocket from '../rocket.gif'
import git from './assets/GitHub.png'
import './Home.css'

export const Home = () => {
    return (
        <main>
            <div className="intro">
                <h1>Antonio <span id="lastName">Guerriere</span></h1>
                <h3 id="subTitle">Software Developer</h3>
            </div>
            <img className="rocket" src={rocket} alt="rocket" />
            <div>
                <img className="gitLogo" src={git} alt="github" />
                <p id="gitLink"><a href="https://github.com/AGuerriere">GitHub</a></p>
            </div>

        </main>
    )
}


export default Home