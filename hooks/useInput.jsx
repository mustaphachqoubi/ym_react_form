import React, { useState } from 'react'

const useInput = ( validateValue ) => {

  const [inputValue, setInputValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const valueIsValid = validateValue(inputValue)
  const hasErr = !valueIsValid && isInputTouched

  const handleInputValueChanger = (event) => {
    setInputValue(event.target.value)
  }

  const handleOnblurInput = () => {
    setIsInputTouched(true)
  }

  const resetValue = () => {
    setInputValue("")
    setIsInputTouched(false)
  }

  return {
    inputValue,
    valueIsValid,
    hasErr,
    handleInputValueChanger,
    handleOnblurInput,
    resetValue
  }
}

export default useInput
