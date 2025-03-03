import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <>
      <Steps />
    </>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button
        className='close'
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        {isOpen ? 'x' : '+'}
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              backgroundColor='#e7e7e7'
              textColor='#333'
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
            >
              Learn Now
            </Button>
          </StepMessage>

          <div className='buttons'>
            <Button
              backgroundColor={'#7950f2'}
              textColor={'#fff'}
              onClick={handlePrevious}
            >
              <span>👈 Previous</span>
            </Button>
            <Button
              backgroundColor={'#7950f2'}
              textColor={'#fff'}
              onClick={handleNext}
            >
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </button>
  );
}
