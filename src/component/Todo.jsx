import React, { useState } from 'react'

function Todo() {


     const [todos,setTodo] = useState([])   //todos =[] if any change in value of useState setTodo() apply it in todos
  return (
    <div>
        <h1>Todo List</h1>
        <p>Total Todos: {todos.length}</p>
    </div>
  )
}

export default Todo



// state:(its like a variable) page didnot reload 
// state: if the data changes in the js, in React UI will change it automatically using state