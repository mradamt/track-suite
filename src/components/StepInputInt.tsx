import React, { useState } from 'react'
import ButtonStepInput from './ButtonStepInput'

import './StepInput.scss'

const StepInputInt = function(props: any) {
  const [value, setValue] = useState(props.value || '0')

  const validateVal = (testVal: string | number) => {
    const defaultMinZero = props.min ? Number(props.min) : 0
    if (Number(testVal) < Number(defaultMinZero)) {
      return defaultMinZero
    } else if (Number(testVal) > Number(props.max)) {
      return props.max
    }
    return testVal
  }

  const handleClick = (sign: number, stepSize: (string | number) = props.stepSize || '1') => {
    const newValRounded = Math.ceil((Number(value) + sign * Number(stepSize)) / Number(stepSize)) * Number(stepSize)
    const newValValid: Number = validateVal(newValRounded)
    setValue(newValValid)
  }

  const handleBlur = (rawStr: string) => {
    const onlyNums: string = rawStr.replace(/\D/g,'')
    setValue(validateVal(onlyNums))
  }

  return (
    <div className='step-input step-input-int'>
      {!props.disabled && <ButtonStepInput plus onClick={handleClick}/>}
      <input
        value={value}
        onFocus={e => e.target.select()}
        onChange={e => setValue(e.target.value)}
        onBlur={e => handleBlur(e.target.value)}
        name={props.name}
        type='text'
        disabled={props.disabled}
      />
      {!props.disabled && <ButtonStepInput minus onClick={handleClick}/>}
    </div>
  )
}

export default StepInputInt