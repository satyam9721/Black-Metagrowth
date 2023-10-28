import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult/QuizResult";
import { Button, Form } from "react-bootstrap";

function Quiz() {
  //   const hi = QuizData[0].answers[2].text;
  // console.log(hi);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const weight = QuizData[currentQuestion].answers.weightage;
  const selectop = QuizData[currentQuestion].answers.answertype;
  const [score, setScore] = useState(weight);
  const [clickedOption, setClickedOption] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // const changeQuestion = () => {
  //   updateScore();
  //   if (currentQuestion < QuizData.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     setClickedOption(0);
  //   } else {
  //     setShowResult(true);
  //   }
  // };

  // const PrevQuestion = () => {
  //   updateScore();
  //   if (currentQuestion > 0) {
  //     setCurrentQuestion(currentQuestion - 1);
  //     setClickedOption(null);
  //   }
  // };
  const handleNext = () => {
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const updateScore = () => {
    const correctAnswers = QuizData[currentQuestion].answers.weightage;
    if (correctAnswers.includes(clickedOption)) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  const handleCheckboxChange = (optionIndex) => {
    if (clickedOption.includes(optionIndex + 1)) {
      // If the checkbox is already selected, remove it from the selected options
      const updatedOptions = clickedOption.filter(
        (item) => item !== optionIndex + 1
      );
      setClickedOption(updatedOptions);
    } else {
      // If the checkbox is not selected, add it to the selected options
      const updatedOptions = [...clickedOption, optionIndex + 1];
      setClickedOption(updatedOptions);
    }
  };

  // Set the current question index here

  return (
    <>
      <h2 className="head">Metagrowth</h2>

      {currentQuestion === QuizData.length - 1 ? (
        <QuizResult
          score={score}
          totalScore={QuizData.length}
          tryAgain={resetAll}
        />
      ) : (
        <>
          <span>Section: {QuizData[currentQuestion].section}</span>

          <h5 className="numoption">
            Select option: {QuizData[currentQuestion].answertype}
          </h5>
          <div className="question">
            <span>{QuizData[currentQuestion].index}. </span>
            <span id="question-txt">{QuizData[currentQuestion].question}</span>
          <div className="Answer">
            {QuizData[currentQuestion].answers.min ||
            QuizData[currentQuestion].answers.max ||
            QuizData[currentQuestion].answers.step ? (
              <form onInput="result.value = slider.value">
                <label>
                  Rate {QuizData[currentQuestion].answers.min} to{" "}
                  {QuizData[currentQuestion].answers.max}
                </label>
                <br />
                <input
                  type="range"
                  min={QuizData[currentQuestion].answers.min}
                  max={QuizData[currentQuestion].answers.max}
                  step={QuizData[currentQuestion].answers.step}
                />
                Steps{" "}
                <output name="result" for="slider">
                  {QuizData[currentQuestion].answers.step}
                </output>
              </form>
            ) : (
              <div className="form-check">
                {QuizData[currentQuestion].answers.map((answer, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id={`radioOption-${index}`}
                      value={answer.weightage}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`radioOption-${index}`}
                    >
                      {answer.text}
                    </label>
                  </div>
                ))}
              </div>

              // <ul>
              //   {QuizData[currentQuestion].answers.map((answer, index) => (
              //     <li key={index}>{answer.text}</li>
              //   ))}
              // </ul>
            )}
            </div>

            </div >    
            <div>
            <Button
              onClick={handlePrevious}
              variant="outline-warning"
              className="next-btn"
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => handleNext()}
              variant="outline-danger"
              className="mt-2"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Quiz;
