import { useState } from 'react';
import Question from './Question';
import Results from './Results';
import { quizQuestions } from '../data/questions';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newAnswers);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    return (
      <Results
        score={calculateScore()}
        total={quizQuestions.length}
        onRestart={restartQuiz}
        questions={quizQuestions}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Work Team Quiz</h1>
        <div className="progress">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </div>
      </div>
      <Question
        question={quizQuestions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;
