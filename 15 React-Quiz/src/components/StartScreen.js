import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { noOfQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{noOfQuestions} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
