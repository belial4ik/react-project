import classes from './TodoList.module.css';
import { AiFillDelete } from "react-icons/ai"

const TodoList = props => {
  return (
    <>
      {
        props.todos.map(({ id, title }) => (
          <div key={id} className={`${classes.todoList} container`}>
            <h3>{title}</h3>
            <span onClick={() => props.onDelete(id)} ><AiFillDelete /></span>
          </div>
        ))
      }
    </>
  )
}

export default TodoList