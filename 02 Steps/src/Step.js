import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">
            <h3>Step {step} </h3> {messages[step - 1]}
          </p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
            {/* <Button
              bgColor="#7950f2"
              textColor="#fff"
              text="Previous"
              onClick={handlePrevious}
              emoji="👈"
            />
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              text="Next"
              onClick={handleNext}
              emoji="👉"
            /> */}
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Step;
