function Results({ score, total, onRestart, questions, userAnswers }) {
  const percentage = Math.round((score / total) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🌟";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 50) return "Good effort! 👍";
    return "Keep learning! 📚";
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <h1>Quiz Complete!</h1>
        <div className="score-display">
          <div className="score-circle">
            <div className="score-text">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {total}</span>
            </div>
          </div>
          <div className="percentage">{percentage}%</div>
          <div className="performance-message">{getPerformanceMessage()}</div>
        </div>

        <div className="answers-review">
          <h2>Review Your Answers</h2>
          {questions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.correctAnswer;
            return (
              <div key={question.id} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="review-header">
                  <span className="question-number">Q{index + 1}</span>
                  <span className={`result-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                </div>
                <p className="review-question">{question.question}</p>
                <p className="review-answer">
                  <strong>Your answer:</strong> {question.options[userAnswers[index]]}
                </p>
                {!isCorrect && (
                  <p className="review-correct">
                    <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button className="restart-button" onClick={onRestart}>
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}

export default Results;
