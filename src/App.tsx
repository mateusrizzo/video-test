import React, { useState, useRef } from 'react';

import './App.css';

import paris from './assets/videos/Paris.mp4';
import checked from './assets/icons/checked.png';
import wrong from '.assets/icons/wrong.png';


function App() {
  const [firstQuestionVisible, setFirstQuestionVisible] = useState(false);
  const [isFirstQuestionAnswered, setIsFirstQuestionAnswered] = useState(false);
  const player = useRef<HTMLVideoElement>(null);


  function handleQuiz () {
    if (player.current){
      if(player.current.currentTime >= 5 && firstQuestionVisible === false && isFirstQuestionAnswered === false) {
        setFirstQuestionVisible(true);
        player.current.pause();
      } 
    }
  }
  function wrongAnswerSelected () {
    setIsFirstQuestionAnswered(true);
    setFirstQuestionVisible(false);
    if (player.current){
    player.current.play();
    }
  }
  function rightAnswerSelected () {
    setIsFirstQuestionAnswered(true);
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
              <button className="options" onClick={wrongAnswerSelected}>A. 12 anos</button>
              <button className="options" onClick={rightAnswerSelected}>B. 10 anos</button>
              <button className="options" onClick={wrongAnswerSelected}>C. 20 anos</button>
              <button className="options" onClick={wrongAnswerSelected}>D. 8 anos</button>
            </div>
          </div>
        </div>
      }
      <div className="questions-list">
        <p className="questions-list-label">Pergunta 1 {isFirstQuestionAnswered ? <img className="answer-icon" src={checked} alt="question right"/> : null}</p>
        <p className="questions-list-label">Pergunta 2</p>
        <p className="questions-list-label">Pergunta 3</p>
      </div>
    </div>
  );
}

export default App;
