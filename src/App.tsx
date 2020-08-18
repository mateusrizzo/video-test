import React, { useState, useRef } from 'react';

import './App.css';

import paris from './assets/videos/Paris.mp4';


function App() {
  // const [time, setTime] = useState<number>();
  const [questionVisible, setQuestionVisible] = useState(false);


  const player = useRef<HTMLVideoElement>(null);


  function handleQuiz () {
    if (player.current){
      if(player.current.currentTime >= 5 && questionVisible === false) {
        setQuestionVisible(true);
        player.current.pause();
      } 
    }
  }
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="page-title">Revolução Francesa</h1>
      </div>
      <div className="video-container">
        <video controls src={paris} ref={player} onTimeUpdate={handleQuiz}/>
      </div>
      {!questionVisible ? null :
        <div className="quiz-container">
          <div className="question">
            <p className="question-label">Quanto tempo durou a revolução francesa?</p>
            <div className='buttons-container'>
              <button className="options">A. 12 anos</button>
              <button className="options">B. 10 anos</button>
              <button className="options">C. 20 anos</button>
              <button className="options">D. 8 anos</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
