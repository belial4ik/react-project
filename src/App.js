import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  //Submit form
  const submitForm = event => {
    event.preventDefault()
    const currentTime = `
    ${new Date().getDate().toString()}.0${+ new Date().getDay().toString() + 1}.${new Date().getFullYear().toString().substring(2)}
    ${new Date().getHours().toString()}:${new Date().getMinutes().toString() < 10 ? 0 + new Date().getMinutes().toString() : new Date().getMinutes().toString()}:${new Date().getSeconds().toString() < 10 ? 0 + new Date().getSeconds().toString() : new Date().getSeconds().toString()}
    `
    const newTodo = { id: Math.floor(Math.random() * 10000), title: todoText, time: currentTime, isCompleted: false }
    const newTodos = [...todos, newTodo]

    if (todoText.length > 0 && todoText.length < 21 && todoText.trim() !== '') {
      setTodos(newTodos)
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
