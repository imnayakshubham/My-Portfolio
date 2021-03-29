import React, { Component } from 'react'
import './Skills.css'
import 'tachyons'


export class Skills extends Component {
    render() {
        return (
            <div className = 'Skill'>
                <h1 className = 'Skill_Heading grow'>
                    Skills

                </h1>
                <p className = 'MySkills'><h3>Web Development : 
                    </h3> HTML,   CSS, ReactJS, Flask</p>
                {/* <hr></hr> */}
                <p className = 'MySkills'>
                    <h3>Languages and Database : </h3> Python, MySQL, C, C++,  Javascript</p>
                {/* <hr></hr> */}

                <p className = 'MySkills'><h3>Data Science : 
                    </h3> ML, NLP, DL, Tableau
                </p>
            </div>
          
        )
    }
}

export default Skills
