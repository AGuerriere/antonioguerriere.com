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
                    First year BSc (Honours) Computing and IT student looking to get a role as a software developer. Before starting university, I learned, through self-teaching, how to use Javascript, CSS, HTML, Python, React, and Bash scripting, Git and GitHub. During summer 2022 I interned as a frontend developer. During my internship I was responsible for creating and maintaining front-end testing using JavaScript and Playwright. My work had a real positive impact for the company as it allowed management to find and fix some important bugs, giving users a better experience. I was also given several tickets regarding front-end work using HTML, CSS and Bootstrap. 
                    I also have a strong background in sales, with over 10 years’ experience,
                    including 3 years building and leading my own consultancy. Thanks to my previous roles I have developed good communication skills, that allow me to liaise with c-level professionals and engineers.
                    I am confident I can have a real impact within your organisation, as I have done in the past, while further honing my software developer skills. Thank you for your interest in my profile.
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