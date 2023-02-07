import classes from './TodoList.module.css';
import { AiFillDelete } from "react-icons/ai"

const TodoList = props => {
  return (
    <>
      {
        props.todos.map(({ id, title, time, isComplete }) => (
          <div key={id} className={`${classes.todoList} container`}>
            <div>
              <h3 onClick={() => props.onComplete(id)}>{title}</h3>
            </div>
            <div>
              <span className={classes.timeOfTodo}>{time}</span>
              <span className={classes.deleteBtn} onClick={() => props.onDelete(id)}><AiFillDelete /></span>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default TodoList