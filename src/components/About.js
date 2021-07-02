import React from 'react';
import myPic from './assets/me.png'
import './About.css'
import git from './assets/GitHub.png'


const About = () => {
    return (
        <article>
            <div className="profile">
                <div className="container-about">
                    <div>
                        <img className="avatar" src={myPic} />
                    </div>
                    <div className="title">
                        <h1>About Me</h1>
                    </div>
                    <div className="description">
                            Hi, I am Antonio Guerriere. I am a software developer, based in Northern Ireland. I have been an IT enthusiast all my life and so I decided to fully dedicate myself to obtain the technical skills required to become a software developer. In an effort to learn as much as possible I have started a journey of self teaching Javascript, Python, HTML and CSS. In addition I have also learned how to use frameworks and libraries like React, Bootstrap, Selenium and tools like Git and GitHub.
                            I have built my career in a variety of roles and industries from which I have developed a wide range of transferable skills. I am a highly motivated, versatile individual with excellent communication skills and the ability to develop successful business relationship with team members and clients. I am highly ambitious with excellent time management and problem solving ability. I am looking for an opportunity to further develop my programming skills. Thanks for looking at my porfolio.
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