const Initial = ({startQuiz = () => {} }) =>{
    return(
        <div className="Initial-component">
            <button onClick={()=>startQuiz(1)}>Start Quiz</button>
        </div>
    )
}

export default Initial