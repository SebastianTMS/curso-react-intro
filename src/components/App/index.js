import React from "react";
import { TodoProvider } from "../TodoContext/TodoContext";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
//   { text: "LALALALALA", completed: false },
// ];

// localStorage.setItem('TodosMachine_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TodosMachine_V1');

//Componente de React
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
