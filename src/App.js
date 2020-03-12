import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './nav' ;
import Logo from './component/logo';
import Stranger from './component/stranger';
import Episode from './component/episode';
import Gallery from './component/gallery';
import Video1 from './component/video';


class App extends Component {
  render(){

  

  
  return (
    <header>
       

   
    <div className="main">
    
    
    <BrowserRouter>
 
    <Nav/>
   <Switch>
     <Route exact path="/" component={Logo}/>
     <Route path="/home" component={Logo}/>
      <Route path="/stranger" component={Stranger}/>
      <Route path="/episode" component={Episode}/>
      <Route path="/gallery" component={Gallery}/>
     <Route path="/video" component={Video1}/>
     </Switch>
 
  </BrowserRouter> 
</div>

</header>
  
    
     
    
  );
}
}

export default App;
