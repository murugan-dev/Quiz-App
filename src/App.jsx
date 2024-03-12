import {useState} from "react"
import './App.css';
import questions from "./constant/question.json"
import Questions from "./component/Questions.jsx"
import Results from "./component/Results.jsx"
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([])

  const handleNextQuestion = (isCorrect) =>{
    setCurrentQuestion(prev => prev +1)
    setUserAnswers([...userAnswers, isCorrect])
  }
  const handleResetQuiz = () =>{
    setCurrentQuestion(0);
    setUserAnswers([])
  }
  return (
    <>
      <h1>Welcome TO Quiz</h1>
      <div className="App">
        {/* Questions Component*/}

        {currentQuestion < questions.length &&        
        <Questions question={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>
        }
        {/* Results Component*/}
        {userAnswers.length === questions.length &&
        
        <Results 
          userAnswer = {userAnswers}
          questions = {questions}
          resetQuiz = {handleResetQuiz}
        />
        }


      </div>
    </>
  );
}

export default App;
