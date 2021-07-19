import React from 'react'
import SkillsUI from './SkillsUI.js'



const Skills = () => {
    return(
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
                <div className="col-md-4">
                    <SkillsUI title="💻 Front-end" 
                    skillList={['React', 'HTML', 'CSS', 'JavaSript']}/>
                    <SkillsUI title="⚙️ Back-end" 
                    skillList={['Node', 'Express', 'Python', 'SqlLite']}/>
                    <SkillsUI title="🛠 Tools and Libraries" 
                    skillList={['Git/GitHub', 'Npm', 'Yarn', 'Selenium', 'Bash/Zsh', 'Regex']}/>

 
                </div>
        </div>
    </div>
    )
}

export default Skills