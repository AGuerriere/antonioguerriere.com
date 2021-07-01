import React from 'react'
import Card from './Card'
import drum from './drum.png'

const banana = [
    {
        title:"Drum Keyboard",
        image: drum, 
    
    }
]

const Projects = () => {
    const projectList = { name: 'Drum Keyboard'}
    return (
        <div>
            <Card title={banana[0].title} image={banana[0].image}/>
        </div>
    )
}

export default Projects

