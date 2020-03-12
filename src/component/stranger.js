import React, { Component } from 'react';
import data from '../data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide } from 'react-slideshow-image';
// import "../node_modules/video-react/dist/video-react.css";
// import {Player,ControlBar} from 'video-react';

import './stranger.css'
const prop = {
  
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class Stranger extends Component{
   
     render(){

        return(
        <div>
           <p className="txt">  {data.heading}</p>
          {/* <Slide {...prop}>
           <div className="embed-responsive embed-responsive-1by1"> 
  <iframe className="embed-responsive-item"  title="video-link1" 
src="https://www.newsobserver.com/news/local/article182498126.html/video-embed"  frameBorder="0"  allowFullScreen scrolling="no"> 
      </iframe><p className="description">{data.description.desc1}</p></div>
       <div className="embed-responsive embed-responsive-1by1"> 
      <iframe className="embed-responsive-item" src="https://www.newsobserver.com/entertainment/tv/article181307946.html/video-embed" 
      title="video-link2" frameBorder="0"
     allowfullscreen scrolling="no"></iframe> <p className="description">{data.description.desc2}</p> </div>
     </Slide> */}

     
<div class="video-container">
  
  <div class="responsive-video">
    <iframe src="https://www.newsobserver.com/news/local/article182498126.html/video-embed" title="link1" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen scrolling="no"></iframe>
    
  </div>
  <p className="description">{data.description.desc1}</p>
    <p className="description">{data.snippets}</p>
</div>
  
<div class="video-container">
  <div class="responsive-video">
    <iframe src="https://www.newsobserver.com/entertainment/tv/article181307946.html/video-embed" title="link2" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen scrolling="no"></iframe>
  </div>
  <p className="description">{data.description.desc2}</p>
    <p className="description">{data.quote.text}-{data.quote.author}</p>
</div>
  
    
           </div>
        )
    }


}
export default Stranger;