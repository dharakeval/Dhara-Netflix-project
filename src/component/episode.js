import React, { Component } from 'react';
import  data from '../data/data.json';
import '../component/epi.css';


class Episode extends Component{
    constructor(){
        super()
       this.state={isHidden:false,show:false};
        this.onAscen=this.onAscen.bind(this);
}
   onAscen(){
    

    this.setState({
        isHidden:!this.state.isHidden });
    }
onDscen(){

    this.setState({show:!this.state.show})
}
    render(){
        let d1=data.episode.map(function(n){return n});
       
        var a1=d1.sort((a,b)=>a.rating>b.rating?1:-1);
       
       
        return(
            <div className="imgback">
                <div> 
                <button type="submit" onClick={()=>this.onAscen()} className="sort"><b>Click to see the list of the Series</b></button>
                <button type="submit" onClick={()=>this.onDscen()} className="sort1"><b>Top Rated Series</b></button></div>
               {this.state.show? 
               <div class="flex-container">
                   {data.episode.map((detail,i)=>{
                return <div>
                <div>
                <section> {detail.name}-{detail.season}  {detail.rating}</section>
                </div>

                </div>
                })}</div>
                :null}

               { this.state.isHidden?
               <div class="flex-container">
               {a1.map((detail,i)=>{

                   return <div>
                   
              
               <div>
               <section> {detail.name}-{detail.season}  {detail.rating}</section>
               </div>
               
              </div>
               })}</div>
               :null
                   
}
            
              
            </div>
        )
    }

}
export default Episode;