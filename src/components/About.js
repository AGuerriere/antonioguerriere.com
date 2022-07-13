import React from 'react';
import myPic from './assets/me.jpg'
import './About.css'
import git from './assets/GitHub.png'


const About = () => {
    return (
        <article>
            <div className="profile">
                <div className="container-about ">
                    <div>
                        <img className="avatar" alt="avatar" src={myPic} />
                    </div>
                    <div className="title">
                        <h1>About Me</h1>
                    </div>
                    <div className="description ">
                        Hi, I am Antonio Guerriere. I am a front end software developer, based in Northern Ireland. I am currently working with React, Javascript, HTML, CSS and testing front-ends with Playwright. While I started as a self taught software developer, now I am also a BSc(Honours) Computing and IT student at the Open University. I have been an IT enthusiast all my life and so I decided to fully dedicate myself to obtain the technical skills to excel at my job. I have built my career in a variety of roles and industries from which I have developed a wide range of transferable skills. I am a highly motivated, versatile individual with excellent communication skills and the ability to develop successful business relationship with team members and clients. I am highly ambitious with excellent time management and problem solving ability. Thanks for looking at my portfolio.
                    </div>
                    <div>
                        <img className="gitLogo" src={git} alt="github" />
                        <p id="gitLink"><a href="https://github.com/AGuerriere">GitHub</a></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About