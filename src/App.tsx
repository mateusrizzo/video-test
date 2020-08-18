import React, { useState, useRef } from 'react';

import './App.css';

import paris from './assets/videos/paris.mp4';


function App() {
  // const [play, setPlay] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);


  const player = useRef<HTMLVideoElement>(null);


  function handleQuiz () {
    console.log('entrou aqui');
    // if (player && player.current) {
    //   console.log(player.current.getCurrentTime());
    // }
  }
  return (
    <div className="container">
      <div className="video-container">
        <video controls src={paris} ref={player}/>
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
