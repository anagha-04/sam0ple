import React, { useEffect, useState } from 'react'

function Todo() {


  const [todos, setTodo] = useState([])   //todos =[] if any change in value of useState setTodo() apply it in todos

  useEffect(() => {

    fetch("https://dummyjson.com/todos").then(res => res.json()).then(data => {

      setTodo(data.todos);



    })
  },[])




  return (
    <div>
      <h1>Todo List</h1>
      <p>Total Todos: {todos.length}</p>
      <ul>{todos.map(todo => {
        <li><span>{todo.todo}</span><span>{todo.completed}</span></li>

      })}</ul>
    </div>
  )
}

export default Todo



// state:(its like a variable) page didnot reload
// state: if the data changes in the js, in React UI will change it automatically using state
// useEffect :


// fetch("url").(res => res.json()).then(data =>{
//         setTodo(data.todos);
//          })


//fetch has two attributes : then and promise