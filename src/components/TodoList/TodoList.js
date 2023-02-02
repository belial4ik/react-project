import classes from './TodoList.module.css';
import { AiFillDelete } from "react-icons/ai"

const TodoList = props => {
  return (
    <>
      {
        props.todos.map(todo => (
          <div key={todo.id} className={`${classes.todoList} container`}>
            <h3>{todo.title}</h3>
            <span><AiFillDelete /></span>
          </div>
        ))
      }
    </>
  )
}

export default TodoList