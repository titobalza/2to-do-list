import React, {useState} from 'react'
import Todo from './Todo.jsx'
import TodoForm from './TodoForm.jsx'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
      if(!todo.text || /^\s*$/.test(todo.text)) {
        return
      }
      const newTodos =[todo, ...todos]
      
      setTodos(newTodos)
      console.log(todo, ...todos)
    }  

    const updateTodo = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return
      }

      setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }



    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id ===id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodos)
    }
  return (
    <div>
        <h1 className='display-6 pb-2'> The #1 Task Management Tool </h1>
        {todos.length <= 0 && "There are no todos  "}
        {todos.length>0 && <div>there are {todos.length} tasks</div>}
	  
        <TodoForm onSubmit={addTodo}/>   
        <Todo
        todos={todos}
        completeTodo={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
        
    </div>
  );
}

export default TodoList