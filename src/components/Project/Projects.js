import React, { Component } from 'react'
import ProjectDetail from '../Project/ProjectDetail.js';
import './Projects.css'
import 'tachyons'


// src\components\Project\ProjectDetail.js


class Projects extends Component {
   
    render() {
        this.state = {
            data : ProjectDetail
        }
        
        return (
            <center>
                <h1 className = 'Project_heading grow ma2'>Projects</h1>
            <div>
                {this.state.data.map((projectinfo) =>{
                    return(
                    <div className='container'>
                                <div >
                                    <img src = {projectinfo.url} className ='projimages' alt = 'Project-Images'></img>
                                </div>
                                    <div className = 'Content'>
                                        <h3 className = 'heading grow'>{projectinfo.name}</h3><br></br>

                                        <b>Description </b> :<p className = 'description'>{projectinfo.desc}</p><br></br>

                                        <b> Learned</b> : <p className = 'learned'>{projectinfo.learned}</p>

                                        <a href = {projectinfo.codelink} className ='links' target = '_blank' rel="noreferrer">Link to Code</a>



                                    </div>
                                    
                            </div>
                            
                            
                            
                            );
                        })}
                                    
             </div>
                         </center>
        );
    }
            
}


export default Projects;