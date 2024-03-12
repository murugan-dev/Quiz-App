const Questions = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.options.map((option, i) => {
          return (
            <li key={i}>
              <button onClick={()=> onAnswerClick(option.isCorrect)}>{option.option}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Questions;
