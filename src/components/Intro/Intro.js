import React, { Component } from 'react'
import './Intro.css'
import 'tachyons'

export class Intro extends Component {
    render() {
        let MyEmail = 'imnayakshubham@gmail.com'
        return (
            <div className='Intro ma2'>
                <a href = '/'><img src = 'https://joeschmoe.io/api/v1/SH' className = 'MyImage'></img></a>
                <h1 className = 'MyName'>Nayak Shubham</h1>
                <p className = 'MyPara'>A Story Teller who codes.</p>
                <p className = 'MyLinks'>
                    <a href = 'https://github.com/imnayakshubham' target = '_blank' rel="noreferrer"><i className="fa fa-github" style = {{padding:0,width: 50,fontSize :30}}></i></a>
                    <a href = 'https://www.linkedin.com/in/imnayakshubham/' target = '_blank' rel="noreferrer"><i className="fa fa-linkedin" style = {{padding:0,width: 50,fontSize :30}}></i></a>


                </p>
                <h6 className = 'MyLocation' ><i className="fa fa-map-marker" style = {{padding:0,width: 25,fontSize :20,textAlign:'center'}}
                > </i>                    
                
                    Ahmedabad,Gujarat,India</h6>
                <h6 className = 'MyEmail'><i className="fa fa-envelope" style = {{padding:0,width: 25,fontSize :20,textAlign:'center'}}
                > </i>
                    {MyEmail}</h6>





                
            </div>
        )
    }
}

export default Intro
