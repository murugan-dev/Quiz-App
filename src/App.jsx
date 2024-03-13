import {useState} from "react"
import './App.css';
import questions from "./constant/question.json"
import Questions from "./component/Questions.jsx"
import Results from "./component/Results.jsx"
import Initial from "./component/Initial.jsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([])

  const handleNextQuestion = (isCorrect) =>{
    setCurrentQuestion(prev => prev +1)
    setUserAnswers([...userAnswers, isCorrect])
  }

  const handleResetQuiz = () =>{
    setCurrentQuestion(1);
    setUserAnswers([])
  }

  const startQuiz = (val) =>{
    setCurrentQuestion(val)
  }

  return (
    <>
      <h1>Welcome TO Quiz</h1>
      <div className="App">


        {/* Questions Component*/}

        { (currentQuestion === 0 && <Initial startQuiz={startQuiz}/>) 
        }
        {
          currentQuestion !== 0 && currentQuestion <= questions.length  && <Questions question={questions[currentQuestion - 1]} onAnswerClick={handleNextQuestion}/>
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
