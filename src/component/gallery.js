import React, { Component } from 'react';

import { Zoom } from 'react-slideshow-image';

import data from '../data/data.json'
import '../component/gallery.css';

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows:false,
    indicators:false
    
    
  }
class Gallery extends Component{



  render(){
    return(
      <div className="m">
        
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
            {data.gallery.map((gal,i)=>{
                return <div className="each-slide">
                {/* <div style={{'backgroundImage':`url(${gal.src})`}}> */}
                    <h2 class="des">{gal.text}</h2>
               <img src={gal.src} alt="altimg" className="imgslid" style={{width:"100%",height:"50%"}}></img> </div>
             
              
            })}</Zoom>
        

        </div>
     </div>
    )
  }


}
export default Gallery;
