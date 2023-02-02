import classes from './TodoList.module.css';
import { AiFillDelete } from "react-icons/ai"

const TodoList = props => {
  return (
    <>
      {
        props.todos.map(({ id, title, isComplete }) => (
          <div key={id} className={`${classes.todoList} container`}>
            <h3
              onClick={() => props.onComplete(id)}
            >{title}</h3>
            <span onClick={() => props.onDelete(id)} ><AiFillDelete /></span>
          </div>
        ))
      }
    </>
  )
}

export default TodoList