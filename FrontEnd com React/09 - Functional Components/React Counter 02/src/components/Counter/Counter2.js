import React from 'react'

import css from './counter.module.css'
import DecrementButton from './DecrementButton'
import IncrementButton from './IncrementButton'
import Steps from './Steps'
import Value from './Value'

export default function Counter2(props) {
  const { countValue, currentStep, onCount } = props

  const handleButtonClick = (clickType) => {
    onCount(clickType)
  }

  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleButtonClick} />
      <Value value={countValue} />
      <IncrementButton onIncrement={handleButtonClick} />
      <Steps currentSteps={currentStep} />
    </div>
  )
}
