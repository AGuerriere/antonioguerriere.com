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
                    First year BSc (Honours) Computing and IT student looking to get a role as a software developer. I also have a strong background in sales, with over 10 years experience, including 3 years building and running my own consultancy. Before starting university I learned, through self teaching, how to use Javascript, Python, React, CSS, HTML, Node, Express, Bash scripting, Git and GitHub. 
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