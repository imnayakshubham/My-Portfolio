import React, { Component } from 'react'
import './About.css'
import 'tachyons'


export class About extends Component {
    render() {
        return (
            <div className='About'>
                <h1 className = 'About_Me grow'>About Me</h1>

                <p  className='AboutPara'>
                    An independent and self-motivated student who is exploring, learning ReactJs, Machine
                    Learning, Data Science, Natural Language Processing by parallelly building projects.
                </p>

                <p  className='AboutPara1'>
                    A good story teller who uses Tableau Desktop for Data Visualization and to explore/understand the data for making decision.

                </p>


                
            </div>
        )
    }
}

export default About
