import React, { useRef, useState } from 'react'
import useInput from '../hooks/useInput'

const App = () => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isValueTouched, setIsValueTouched] = useState(false);

  const { 
    inputValue: firstName,
    valueIsValid: isFirstNameValid,
    hasErr: isFirstNameHasErr,
    handleInputValueChanger: handleFirstNameChanger,
    handleOnblurInput: handleFirstNameOnblur,
    resetValue: restFirstNameValue
  } = useInput( (inputValue) => inputValue.trim() !== "")

  const handleSubmit = () => {
    restFirstNameValue()
  }

  const onChangeHandler = (event) => {
    setName(event.target.value);
  }
  
  const submitHandler = () => {
    setIsValueTouched(true)
    if(name.trim() === ""){
      setIsValid(false)
      return;
    }
    console.log(name);
    setName("")
    setIsValueTouched(false)
  }

  let isInputInvalid = !isValid && isValueTouched

  return (
    <div>
      <div>
        <label htmlFor='firstName'>first name</label>
        <input onBlur={handleFirstNameOnblur} type='text' id='firstName' value={firstName} onChange={handleFirstNameChanger}/>
        {isFirstNameHasErr && <p style={{color: 'red'}}>Name must not be empty</p>}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App


/*
 <div>
        <label htmlFor='name'>Name</label>
        <input onBlur={() => setIsValueTouched(true)} type='text' id='name' value={name} onChange={onChangeHandler}/>
        {isInputInvalid && <p style={{color: 'red'}}>Name must not be empty</p>}
      </div>

 */

