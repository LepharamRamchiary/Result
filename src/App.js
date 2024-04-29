// import logo from './logo.svg';
import './App.css';
import Hooks from './components/Hook9';
// import Hook2 from './components/Hook2';
// import AddToDo from "./components/AddToDO";
// import ListTask from "./components/TaskList";
// import { useState } from 'react';

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];
function App() {
//   const [todos, setTodos] = useState(initialTodos);

//   function handleAddTodo(title) {
//     setTodos([
//       ...todos,
//       {
//         id: nextId++,
//         title: title,
//         done: false
//       }
//     ]);
//   }

//   function handleChangeTodo(nextTodo) {
//     setTodos(todos.map(t => {
//       if (t.id === nextTodo.id) {
//         return nextTodo;
//       } else {
//         return t;
//       }
//     }));
//   }

//   function handleDeleteTodo(todoId) {
//     setTodos(
//       todos.filter(t => t.id !== todoId)
//     );
//   }


  return (
    <div className="App">
      <Hooks />
    </div>
  );
}

export default App;
