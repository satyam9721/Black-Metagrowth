import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import QuizResult from '../QuizResult/QuizResult';

function Localstorage() {
  const [quizData, setQuizData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);

  const sectionRef = useRef();
  const questionRef = useRef();
  const indexRef = useRef();

  const storeSection = (section) => {
    localStorage.setItem('section', section);
  };

  const storeQuestion = (question) => {
    localStorage.setItem('question', question);
  };

  const storeIndex = (index) => {
    localStorage.setItem('index', index);
  };

  const data = useRef();
  const store = () => {
    const section = sectionRef.current.textContent;
    const question = questionRef.current.textContent;
    const index = indexRef.current.textContent;
    const selectedoption =0;
    const weightage=0;
    const name=0;
    const email=0;
    const mobile=0;


    console.log(data.current.value, 'initial value');
    localStorage.setItem('inputvalue', data.current.value);
    storeSection(section);
    storeQuestion(question);
    storeIndex(index);
  };


  useEffect(() => {
    // Make an API request using Axios
    axios
      .get('http://localhost:3001/api/quiz')
      .then((response) => {
        // Extract the data from the API response
        setQuizData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const quizData = {
  //   //   index: localStorage.getItem('index'),
  //   //   section: localStorage.getItem('section'),
  //   //   question: localStorage.getItem('questions'),
  //   //   answers: [
  //   //     {
  //   //       text: localStorage.getItem('options'),
  //   //       weightage: localStorage.getItem('weightage')
  //   //     }
  //   //   ]
  //   // };
  //   // console.log(quizData)
    
  //   localStorage.setItem('index', quizData[currentPage].index);
  //   localStorage.setItem('section', quizData[currentPage].section);
  //   localStorage.setItem('questions', quizData[currentPage].question);
  //   localStorage.setItem('options', quizData[currentPage].answers[0].text);
  //   localStorage.setItem('weightage', quizData[currentPage].answers[0].weightage);
   

  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const question = quizData[currentPage];
  
    // Save data to localStorage
    localStorage.setItem('index', question.index);
    localStorage.setItem('section', question.section);
    localStorage.setItem('question', question.question);
  
    if (Array.isArray(question.answers)) {
      // Handle multiple-choice questions
      question.answers.forEach((answer, index) => {
        localStorage.setItem(`answer${index + 1}`, answer.text);
        localStorage.setItem(`weightage${index + 1}`, answer.weightage);
      });
    } else {
      // Handle slider/range questions
      localStorage.setItem('min', question.answers.min);
      localStorage.setItem('max', question.answers.max);
      localStorage.setItem('step', question.answers.step);
    }
  
    // Handle navigation to the next question
    if (currentPage < quizData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }
  

  return (
    <>
      {quizData.slice(currentPage, currentPage + 1).map((question) => (
        
        <li key={question._id} className="list-group-item">
          <p ref={sectionRef} className="text-center mb-4">
          Section: {localStorage.getItem('section') || question.section}
          </p>
          <p ref={questionRef} className="h5">
            Q. {question.index}
          </p>
          <p ref={indexRef} style={{ display: 'none' }}>
            {question.index}
          </p>
          <p className="mb-3">{question.question}</p>

          <input ref={data} />
          <Button onClick={handleSubmit}>next</Button> 
        </li>
      ))}
    </>
  );
}

export default Localstorage;
