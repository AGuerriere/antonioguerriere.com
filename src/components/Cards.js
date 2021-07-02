import React from 'react';
import CardUI from './CardUI.js';
import img1 from './assets/drum.png';
import img2 from './assets/cats.png';
import img3 from './assets/colors.png';
import img4 from './assets/portfolio.png';

const allProjects = [
    {
        title: "antonioguerriere.com", 
        live: "https://www.antonioguerriere.com/",
        repo: "https://github.com/AGuerriere?tab=repositories",
        description: "React fun project, using the Robohash API to create unique images and using data from JSONPlaceholder API",
        image: img4
    },
    {
        title: "CatFriends", 
        live: "https://aguerriere.github.io/catfriends-react/",
        repo: "https://github.com/AGuerriere/catfriends-react",
        description: "React fun project, using the Robohash API to create unique images and using data from JSONPlaceholder API",
        image: img2
    },
    {
        title: "Drum Keyboard", 
        live: "https://drum-keyboard.netlify.app",
        repo: "https://github.com/AGuerriere/js-drum",
        description: "An online Drum that can be played with the keyboard",
        image: img1
    },
    {
        title: "Gradient Background Generator", 
        live: "https://aguerriere.github.io/gradient-background-generator/",
        repo: "https://github.com/AGuerriere/gradient-background-generator",
        description: "A gradient background generator, created using HTML and CSS only",
        image: img3
    }
]

const Cards = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {allProjects.map((project, index) => {return( 
                    <div className="col-md-4">
                        <CardUI key={project.title} imgsrc={project.image} title={project.title} liveLink={project.live} repoLink={project.repo} description={project.description}/>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Cards
