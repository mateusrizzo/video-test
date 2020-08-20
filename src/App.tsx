import React, { useState, useRef } from 'react';

import './App.css';

import paris from './assets/videos/Paris.mp4';
import checked from './assets/icons/checked.png';
import wrong from './assets/icons/wrong.png';


function App() {
  const [firstQuestionVisible, setFirstQuestionVisible] = useState(false);
  const [secondQuestionVisible, setSecondQuestionVisible] = useState(false);
  const [isFirstQuestionAnswered, setIsFirstQuestionAnswered] = useState(false);
  const [isSecondQuestionAnswered, setIsSecondQuestionAnswered] = useState(false);
  const [isFirstQuestionRight, setIsFirstQuestionRight] = useState(false);
  const [isSecondQuestionRight, setIsSecondQuestionRight] = useState(false);
  const [question, setQuestion] = useState<number>(1)
  const [score, setScore] = useState<number>(0);
  const player = useRef<HTMLVideoElement>(null);
  var points = 0;

  function handleQuiz () {
    if (player.current){
      if(player.current.currentTime >= 5 && firstQuestionVisible === false && isFirstQuestionAnswered === false) {
        setFirstQuestionVisible(true);
        player.current.pause();
      }
      if(player.current.currentTime >= 10 && secondQuestionVisible === false && isSecondQuestionAnswered === false) {
        setSecondQuestionVisible(true);
        player.current.pause();
      } 
    }
  }
  function wrongAnswerSelected () {
    if(isFirstQuestionAnswered === false) {
      setIsFirstQuestionAnswered(true);
      setFirstQuestionVisible(false);
      setQuestion(2);
    }
    if(isSecondQuestionAnswered === false && question === 2){
      setIsSecondQuestionAnswered(true);
      setSecondQuestionVisible(false);
      setQuestion(3);
    }
    if (player.current){
      player.current.play();
    }
  }
  function rightAnswerSelected () {
    if(isFirstQuestionAnswered === false) {
      setIsFirstQuestionAnswered(true);
      setFirstQuestionVisible(false);
      setIsFirstQuestionRight(true);
      setQuestion(2);
    }
    if(isSecondQuestionAnswered === false && question === 2){
      setIsSecondQuestionAnswered(true);
      setSecondQuestionVisible(false);
      setIsSecondQuestionRight(true);
      setQuestion(3);
    }
    points++;
    setScore(points);
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
              <button className="options" onClick={wrongAnswerSelected}>12 anos</button>
              <button className="options" onClick={rightAnswerSelected}>10 anos</button>
              <button className="options" onClick={wrongAnswerSelected}>20 anos</button>
              <button className="options" onClick={wrongAnswerSelected}>8 anos</button>
            </div>
          </div>
        </div>
      }
      {!secondQuestionVisible ? null :
        <div className="quiz-container">
          <div className="question">
            <p className="question-label">Qual foi o último rei da França antes da revolução francesa?</p>
            <div className='buttons-container'>
              <button className="options" onClick={rightAnswerSelected}>Luis XVI</button>
              <button className="options" onClick={wrongAnswerSelected}>Napoleão I</button>
              <button className="options" onClick={wrongAnswerSelected}>Henrique IV</button>
              <button className="options" onClick={wrongAnswerSelected}>Carlos IX</button>
            </div>
          </div>
        </div>
      }
      <div className="questions-list">
        <p className="questions-list-label">Pontos: {score}</p>
        <p className="questions-list-label">Pergunta 1 {isFirstQuestionAnswered ? <img className="answer-icon" src={isFirstQuestionRight ? checked : wrong} alt="question right"/> : null}</p>
        <p className="questions-list-label">Pergunta 2 {isSecondQuestionAnswered ? <img className="answer-icon" src={isSecondQuestionRight ? checked : wrong} alt="question right"/> : null}</p>
        <p className="questions-list-label">Pergunta 3</p>
      </div>
    </div>
  );
}

export default App;
