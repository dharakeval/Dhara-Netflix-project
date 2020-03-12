import React from 'react';

import "video-react/dist/video-react.css"; // import css

import {Player} from 'video-react';

function App() {
  return (
    <div className="App">
       <Player
       
      playsInline
      poster={require('../data/sintelgame.jpeg')}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
      
    </div>
  );
}

export default App;
