import {useState} from "react"
import './App.css';
import questions from "./constant/question.json"
import Questions from "./component/Questions.jsx"
import Results from "./component/Results.jsx"
import Initial from "./component/Initial.jsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [resultComponent, setResultComponent] = useState(1)
  


  const collectUserAnswers = (isCorrect) => {
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion - 1] = isCorrect;
      return updatedAnswers;
    });
  };

  const handleNextQuestion = () =>{
    setCurrentQuestion(prev => prev + 1)
    console.log(userAnswers)
  }

  const handleResetQuiz = () =>{
    setCurrentQuestion(0);
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
          currentQuestion !== 0 && currentQuestion <= questions.length  && 
          < Questions question={questions[currentQuestion - 1]} onAnswerClick={collectUserAnswers} 
          nextQuestion = {handleNextQuestion}
          questions = {questions} getQuestionContext={setResultComponent}/>
        }
        {/* Results Component*/}
        { resultComponent >  questions.length &&        
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
