import React, { Component } from 'react';
import '../component/logo.css'
import { Link } from 'react-router-dom';




class Logo extends Component{
    render(){

    return(
      <div>
      <img className="image" src={require("../Not-On-Netflix-NEW-2.png")} alt="Netflix"/>

      <h1>Want to see Trailer<br/><Link to={"/video"} className="body-text">Click Me</Link></h1>

</div>
    )
}}
export default Logo;