import React from 'react'

const SkillsUI = ({title, skillList}) => {
    return (
        <div className="card text-center">
        <div className="overflow">
            {/* <img src={props.imgsrc} alt="Image-1" className="card-img-top"/> */}
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{title}</h4>
            <div className="card-text text secondary">
                <div>
                    <ul>
                        {skillList.map(skill => (<li>{skill}</li>))}
                    </ul>
                </div>
               
            </div>   
        </div>
    </div>
    )
}

export default SkillsUI
