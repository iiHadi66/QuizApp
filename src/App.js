import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
  
    // Sample set of 8 questions
    const questionSet = [
      {
        id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg',
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London'],
        correctAnswer: 'Paris'
      },
      {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RZdzC1PeW7fg9lp1gRglbiXQ8i4g7pqoiLxpFXAZ6WyObbwijLPTyprUBAs&s=10',
        question: 'What is the capital of Sweden?',
        options: ['London', 'Stockholm', 'Madrid'],
        correctAnswer: 'Stockholm'
      },
      {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
        question: 'What is the capital of Argentina?',
        options: ['Paris', 'Berlin','Buenos Aires'],
        correctAnswer: 'Buenos Aires'
      },
      {
        id: 4,
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
        question: 'What is the capital of Spain?',
        options: ['Madrid', 'Stockholm', 'Paris'],
        correctAnswer: 'Madrid'
      },
      {
        id: 5,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
        question: 'What is the capital of Turkey?',
        options: ['Ankara', 'Istanbul', 'Cairo'],
        correctAnswer: 'Ankara'
      },
      {
        id: 6,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
        question: 'What is the capital of Egypt?',
        options: ['Rome', 'Madrid', 'Cairo'],
        correctAnswer: 'Cairo'
      },
      {
        id: 7,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
        question: 'What is the capital of Finland?',
        options: ['Seoul', 'Helsinki', 'Stockholm'],
        correctAnswer: 'Helsinki'
      },
      {
        id: 8,
        image: 'https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Ukraine.svg',
        question: 'What is the capital of Ukraine?',
        options: ['Sanaa', 'Seoul', 'Kyiv'],
        correctAnswer: 'Kyiv'
      },
    ];
  
    useEffect(() => {
      setQuestions(shuffleQuestions(questionSet).slice(0, 3));
    }, []);
  
    const shuffleQuestions = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };
  
    const handleAnswer = (selectedOption) => {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
  
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    };
  
    const retryQuiz = () => {
      setQuestions(shuffleQuestions(questionSet).slice(0, 3));
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    };
  
    if (questions.length === 0) {
      return <div>Loading...</div>;
    }
  
    if (showResult) {
      return (
        <div className='container'>
          <h2>Quiz Result</h2>
          <p>Your score: {score}</p>
          <button onClick={retryQuiz}>Try Again</button>
        </div>
      );
    }
  
    const { image, question, options } = questions[currentQuestion];
  
    return (
      <div className='container'>
        <h2>Quiz App</h2>
        <div>
          <img src={image} alt="Question" />
        </div>
        <h3>Question {currentQuestion + 1}</h3>
        <p>{question}</p>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleAnswer(option)}>
              {option}
            </li>
          ))}
        </ul>
        <p>Score: {score}</p>
      </div>
    );
  };

export default App;
