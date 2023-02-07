import { useEffect, useState } from 'react'
import classes from './TodoForm.module.css'

const TodoForm = props => {
  const [isValidForm, setIsValidForm] = useState(false)
  const { todoText, submitForm, setTodoText } = props
  const changeHandler = event => {
    setTodoText(event.target.value)
  }

  useEffect(() => {
    if (todoText.trim() !== '' && todoText.length < 20) {
      setIsValidForm(true)
    } else {
      setIsValidForm(false)
    }
  }, [todoText])

  return (
    <div className={`${classes.formControl} container`}>
      <form onSubmit={submitForm}>
        <input
          onChange={changeHandler}
          value={todoText}
          type="text"
          placeholder='your Todo'
        />
        <button disabled={!isValidForm}>send</ button>
      </form>
    </div>
  )
}

export default TodoForm