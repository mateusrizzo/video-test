import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './App.css';

function App() {
  const [play, setPlay] = useState(true);
  const [questionVisible, setQuestionVisible] = useState(false);
  return ( 
    <div className="container">
      <div className="video-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=NU2GY8_rX60" playing={play} controls={true} width="50%"/>
      </div>
    </div>
  );
}

export default App;
