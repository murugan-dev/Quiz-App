import {useState} from "react"
const Questions = ({ question, onAnswerClick = () => {}, nextQuestion = () => {}, questions, getQuestionContext= () =>{}}) => {
  const [selectOption, setSelectOption] = useState(null)
  const [trackQuestion, setTrackQuestion] = useState(1)

  
  const handleSelectOption = (optionIndex) => {
    setSelectOption(optionIndex);
    onAnswerClick(question.options[optionIndex].isCorrect);
  };
  const handleNextQuestion = () =>{
        if(trackQuestion === question.length){
          getQuestionContext(0)
        }
        getQuestionContext(prev => prev + 1)
        setSelectOption(null)
        nextQuestion()
        setTrackQuestion(prev => prev + 1)
        
  }
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.options.map((option, i) => {
          return (
            <li key={i} onClick={() => handleSelectOption(i)}>
              <input type="radio" checked={selectOption === i} onChange={() => {}}/>
              <span>{option.option}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={()=>handleNextQuestion()}>{questions.length === trackQuestion ? "finish Quiz" : "Next Question" }</button>
    </div>
  );
};
export default Questions;
