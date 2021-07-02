import React from 'react';
import myPic from './assets/me.jpg'

const About = () => {
    return (
        <div>
            <div className="avatar">
                <img src={myPic} alt="" className="avatar-pic" />
            </div>
        </div>
    )
}

export default About