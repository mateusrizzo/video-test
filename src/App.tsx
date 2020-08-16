import React, { useState, useRef } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import './App.css';

function App() {
  const [play, setPlay] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);


  const player = useRef<ReactPlayerProps>(null);


  function handleQuiz () {
    if (player && player.current) {
      console.log(player.current.progressInterval)
    }
  }
  return (
    <div className="container">
      <div className="video-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=NU2GY8_rX60" playing={play} onPlay={() => !setPlay} controls={true} width="50%" onProgress={() => handleQuiz} ref={player}/>
      </div>
      {!questionVisible ? null :
      <div className="quiz-container">
        <div className="question">
          <p className="question-label">Qual o primeiro nome do Jacquin?</p>
          <button className="options">A. Jacques</button>
          <button className="options">B. Pierre</button>
          <button className="options">C. Erick</button>
          <button className="options">D. Genevieve</button>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
