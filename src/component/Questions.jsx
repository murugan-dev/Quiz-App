import {useState} from "react"
const Questions = ({ question, onAnswerClick = () => {}, nextQuestion = () => {},questions }) => {
  const [selectOption, setSelectOption] = useState(null)
  
  const handleSelectOption = (optionIndex) => {
    setSelectOption(optionIndex);
    onAnswerClick(question.options[optionIndex].isCorrect);
  };
  const handleNextQuestion = () =>{
        setSelectOption(null)
        nextQuestion()
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
      <button onClick={()=>handleNextQuestion()}>{questions.lendth === 10 ? "finish Quiz" : "Next Question" }</button>
    </div>
  );
};
export default Questions;
