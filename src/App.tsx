import React, { useState, useRef } from 'react';

import './App.css';

import paris from './assets/videos/Paris.mp4';


function App() {
  const [firstQuestionVisible, setFirstQuestionVisible] = useState(false);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const player = useRef<HTMLVideoElement>(null);


  function handleQuiz () {
    if (player.current){
      if(player.current.currentTime >= 5 && firstQuestionVisible === false && isFirstQuestion === true) {
        setIsFirstQuestion(false);
        setFirstQuestionVisible(true);
        player.current.pause();
      } 
    }
  }
  function wrongAnwserSelected () {
    setFirstQuestionVisible(false);
    if (player.current){
    player.current.play();
    }
  }
  function rightAnwserSelected () {
    setFirstQuestionVisible(false);
    if (player.current){
      player.current.play();
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
      {!firstQuestionVisible ? null :
        <div className="quiz-container">
          <div className="question">
            <p className="question-label">Quanto tempo durou a revolução francesa?</p>
            <div className='buttons-container'>
              <button className="options" onClick={wrongAnwserSelected}>A. 12 anos</button>
              <button className="options" onClick={rightAnwserSelected}>B. 10 anos</button>
              <button className="options" onClick={wrongAnwserSelected}>C. 20 anos</button>
              <button className="options" onClick={wrongAnwserSelected}>D. 8 anos</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
