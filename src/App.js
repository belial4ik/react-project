import { useState } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

const initialState = [
  { id: 1, title: 'Learn English', isCompleted: false },
  { id: 2, title: 'Have a lunch', isCompleted: false }
]

function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState(initialState)

  //Submit form
  const submitForm = event => {
    event.preventDefault()
    const newTodo = { id: Math.floor(Math.random() * 10000), title: todoText, isCompleted: false }
    const newTodos = [...todos, newTodo]

    //Validation
    if (todoText.length > 0 && todoText.length < 21) {
      setTodos(newTodos)
    } else {
      alert('от 1 до 20 символов')
    }
    setTodoText('')
  }

  //Delete todo
  const todoDeleteHandler = id => {
    const todosCopy = todos.filter(todo => todo.id !== id)
    setTodos(todosCopy)
  }

  //complete handler
  const isCompleteHandler = id => {
    todos.map((todo) => {
      if (todo.id != id) {
        todo.isCompleted = !todo.isCompleted
      }
    })
    setTodos(todos)
  }

  return (
    <div>
      <Header />
      <div>
        <TodoForm
          setTodoText={setTodoText}
          submitForm={submitForm}
          todoText={todoText}
        />
        <TodoList
          todos={todos}
          onDelete={todoDeleteHandler}
          onComplete={isCompleteHandler}
        />
      </div>
    </div>
  );
}

export default App;
