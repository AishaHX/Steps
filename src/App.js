import { useState } from 'react'

// data
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑'
]

export default function App () {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  )
}

function Steps () {
  // initialing  state
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious () {
    setStep(step > 1 ? step - 1 : step)
    //if (step > 1) setStep(s => s - 1)
  }

  function handleNext () {
    // setStep func is updating the step to the next number
    setStep(step < 3 ? step + 1 : step)
    // if (step < 3) setStep(n => n + 1)
  }

  return (
    <div>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        {' '}
        &times;
      </button>{' '}
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            {/** om variablen step har värdet 1, 2, 3 beroende var i arrayen den är så ska just den värden o button vara active*/}
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <p className='message'>
            {/** // hämtar variable step value, and also getting the array value att
      position , step -1, för att array has starts with zero, så , 1 -0 = array
      index 1 */}{' '}
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>{' '}
          </div>
        </div>
      )}
    </div>
  )
}
