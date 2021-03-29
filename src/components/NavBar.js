import React  from 'react';
// import ReactDOM from 'react-dom';
import './NavBar.css';
import {NavLink } from 'react-router-dom';




function NavBar(){
    return(
        <div className = 'NavBar'>
            <div className = 'Navbar'>
                <NavLink activeClassName = "active_class" exact to= '/'> Nayak Shubham </NavLink>
                {/* <NavLink activeClassName = "active_class" exact to= '/home'> About Me </NavLink> */}
                                    {/* <Link to= '/'> Home </Link> */}
                {/* <NavLink activeClassName = "active_class" exact to= '/projects'> Projects </NavLink> */}
                <NavLink activeClassName = "active_class" exact to= '/experience'> Experience </NavLink>
                                    {/* <Link to= '/'> Home </Link> */}

            </div>
        </div>
    )
}

export default NavBar



















