import React, { Component } from 'react'
import './Experience.css'
import 'tachyons'


export class Experience extends Component {
    render() {
            return (
                    <div className = 'work'>
                        <h1 className = 'Experience grow'>Experience</h1>

                        <h1>Actively Looking for an Internship.</h1>
                        <p>If you like my Portfolio and love recuriting me. Contact me on</p>
                        <br></br>

                        <a href = 'https://www.linkedin.com/in/imnayakshubham/' target = '_blank' rel="noreferrer"><i className="fa fa-linkedin" style = {{padding:0,width: 50,fontSize :30}}></i></a>
                        
                        
                    </div>
                )
    }
}

export default Experience
