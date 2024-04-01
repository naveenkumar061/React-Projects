import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, noOfQuestions, points, totalPoints, answer } = useQuiz();
  return (
    <div>
      <header className="progress">
        <progress max={noOfQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {noOfQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {totalPoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
