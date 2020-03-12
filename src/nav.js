import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import "./nav.css";
import './App.css';


class Nav extends Component{
    state={};
    componentDidMount(){

        

    }

    render(){

        return(

            <div>
                       
           <nav >
               
                   <Link className="navbar-nav" to={"/home"}><div class="container">
                        <div className="logo">
                         <span className="s">N</span>
                         <span className="s">E</span>
                         <span className="s">T</span>
                         <span className="s">F</span>
                         <span className="s">L</span>
                         <span className="s">I</span>
                         <span className="s">X</span>
                        </div>
                        </div></Link>
                         <ul className="navbar-nav">
                    <li><Link className="nav-link" to={"/gallery"}>Gallery</Link></li>
                    <li><Link className="nav-link" to={"/episode"}>Episodes</Link></li>
                    
                <li><Link className="nav-link"  to={"/stranger"}>Stranger</Link></li>
                 </ul>
              
                
               
                              
               
               
            </nav>

            
            </div>
        
            
        )
    }



}

export default Nav