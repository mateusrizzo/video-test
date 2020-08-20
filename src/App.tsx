import React, { useState, useRef } from 'react';

import './App.css';

import paris from './assets/videos/Paris.mp4';
import checked from './assets/icons/checked.png';
import wrong from './assets/icons/wrong.png';


function App() {
  const [firstQuestionVisible, setFirstQuestionVisible] = useState(false);
  const [secondQuestionVisible, setSecondQuestionVisible] = useState(false);
  const [thirdQuestionVisible, setThirdQuestionVisible] = useState(false);
  const [scoreCardVisible, setScoreCardVisible] = useState(false);
  const [isFirstQuestionAnswered, setIsFirstQuestionAnswered] = useState(false);
  const [isSecondQuestionAnswered, setIsSecondQuestionAnswered] = useState(false);
  const [isThirdQuestionAnswered, setIsThirdQuestionAnswered] = useState(false);
  const [isFirstQuestionRight, setIsFirstQuestionRight] = useState(false);
  const [isSecondQuestionRight, setIsSecondQuestionRight] = useState(false);
  const [isThirdQuestionRight, setIsThirdQuestionRight] = useState(false);
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
      if(player.current.currentTime >= 20 && thirdQuestionVisible === false && isThirdQuestionAnswered === false) {
        setThirdQuestionVisible(true);
        player.current.pause();
      }
      if (player.current.duration == player.current.currentTime && question === 4) {
        setScoreCardVisible(true);
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
    if (isThirdQuestionAnswered === false && question === 3) {
      setIsThirdQuestionAnswered(true);
      setThirdQuestionVisible(false);
      setQuestion(4);
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
      points=score;
      points++;
      setScore(points);
    }
    if(isSecondQuestionAnswered === false && question === 2){
      setIsSecondQuestionAnswered(true);
      setSecondQuestionVisible(false);
      setIsSecondQuestionRight(true);
      setQuestion(3);
      points=score;
      points++;
      setScore(points);
    }
    if(isThirdQuestionAnswered === false && question === 3){
      setIsThirdQuestionAnswered(true);
      setThirdQuestionVisible(false);
      setIsThirdQuestionRight(true);
      setQuestion(4);
      points=score;
      points++;
      setScore(points);
    }
    
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
      {!thirdQuestionVisible ? null :
        <div className="quiz-container">
          <div className="question">
            <p className="question-label">A Queda da Bastilha ocorreu em 1789. Verdadeiro ou falso?</p>
            <div className='buttons-container'>
              <button className="options" onClick={rightAnswerSelected}>Verdadeiro</button>
              <button className="options" onClick={wrongAnswerSelected}>Falso</button>
            </div>
          </div>
        </div>
      }
      {!scoreCardVisible ? null :
        <div className="quiz-container">
          <div className="question">
            <p className="score-label">Você acertou {score} de 3 perguntas!</p>
          </div>
        </div>
      }
      <div className="questions-list">
        <p className="questions-list-label">Pontos: {score}</p>
        <p className="questions-list-label">Pergunta 1 {isFirstQuestionAnswered ? <img className="answer-icon" src={isFirstQuestionRight ? checked : wrong} alt="question right"/> : null}</p>
        <p className="questions-list-label">Pergunta 2 {isSecondQuestionAnswered ? <img className="answer-icon" src={isSecondQuestionRight ? checked : wrong} alt="question right"/> : null}</p>
        <p className="questions-list-label">Pergunta 3 {isThirdQuestionAnswered ? <img className="answer-icon" src={isThirdQuestionRight ? checked : wrong} alt="question right"/> : null}</p>
      </div>
    </div>
  );
}

export default App;
