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

  const submitForm = event => {
    event.preventDefault()
    const newTodo = { id: Math.floor(Math.random() * 10000), title: todoText, isCompleted: false }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setTodoText('')
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
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
