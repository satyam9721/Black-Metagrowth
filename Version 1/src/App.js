import React from 'react'
import Quiz from './components/Quiz'
import QuestionComponent from "./components/QuizQuestions/QuestionComponent"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import QuizResult from './components/QuizResult/QuizResult'
import Quizdisplay from './components/Quizdisplay/Quizdisplay'
import Localstorage from './components/Localstorage/Localstorage'
import Header from './components/Header/Header'
function App() {
  return (
    <>
      {/* <Quizdisplay /> */}
     {/* <Localstorage/> */}
     {/* <QuizResult /> */}
      <Header/>
      <Routes>
      <Route path="/" element={<Quizdisplay />} />
      <Route path="/register" element={<QuizResult />} />
     
       
      </Routes>
     
    </>
  )
}

export default App