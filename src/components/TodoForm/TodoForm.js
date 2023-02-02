import classes from './TodoForm.module.css'

const TodoForm = props => {
  const { todoText, submitForm, setTodoText } = props
  const changeHandler = event => {
    setTodoText(event.target.value)
  }

  return (
    <div className={`${classes.formControl} container`}>
      <form onSubmit={submitForm}>
        <input
          onChange={changeHandler}
          value={todoText}
          type="text"
          placeholder='your Todo'
        />
        <button>send</ button>
      </form>
    </div>
  )
}

export default TodoForm