import React from 'react';
import CardUI from './CardUI.js';
import img1 from './assets/drum.png';
import img2 from './assets/cats.jpg';
import img3 from './assets/colors.png';
import img4 from './assets/portfolio.png';

const allProjects = [
    {
        title: "antonioguerriere.com", 
        live: "https://www.antonioguerriere.com/",
        repo: "https://github.com/AGuerriere?tab=repositories",
        description: " My Porfolio - This is the portfolio I created to showcase my work. I created it using React, Bootstrap and React Router.",
        image: img4,
        key: 1
    },
    {
        title: "CatFriends", 
        live: "https://aguerriere.github.io/catfriends-react/",
        repo: "https://github.com/AGuerriere/catfriends-react",
        description: "A simple React app, created using the Robohash API to create unique images and using data from JSONPlaceholder fake API",
        image: img2,
        key: 2
    },
    {
        title: "Drum Keyboard", 
        live: "https://drum-keyboard.netlify.app",
        repo: "https://github.com/AGuerriere/js-drum",
        description: "This is an online drum that can be played with the keyboard created using HTML, CSS and Vanilla Javascript.",
        image: img1,
        key: 3
    },
    {
        title: "Gradient Background Generator", 
        live: "https://aguerriere.github.io/gradient-background-generator/",
        repo: "https://github.com/AGuerriere/gradient-background-generator",
        description: "A gradient background generator, created using HTML and CSS only",
        image: img3,
        key: 4
    }
]

const Cards = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {allProjects.map((project, index) => {return( 
                    <div className="col-md-4">
                        <CardUI key={project.key} imgsrc={project.image} title={project.title} liveLink={project.live} repoLink={project.repo} description={project.description}/>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Cards
