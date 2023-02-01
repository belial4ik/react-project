import classes from './TodoList.module.css';
import { AiFillDelete } from "react-icons/ai"

const TodoList = () => {
  return (
    <div className={`${classes.todoList} container`}>
      <h3>Hello world</h3>
      <span><AiFillDelete /></span>
    </div>
  )
}

export default TodoList