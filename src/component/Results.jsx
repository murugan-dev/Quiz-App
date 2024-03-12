const Results = ({ userAnswer, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswer.filter((answer) => answer).length;
  return (
    <div className="result-container">
      <h2>Result: </h2>
      <p>
        You get {correctAnswers} out of {questions.length} Marks
      </p>
      <button onClick={resetQuiz}>Restart Quiz</button>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct = {userAnswer[index]}>
              Q{index + 1}. {question.question}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
