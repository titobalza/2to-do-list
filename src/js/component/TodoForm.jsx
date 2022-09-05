 import React, {useState} from 'react'
 
 function TodoForm(props) {
 
  const [input, setInput] = useState('');
 
  const handleChange = e => {
    setInput(e.target.value);
  };

  function handleSubmit(e) {
     e.preventDefault();

     props.onSubmit({
       id: Math.floor(Math.random() * 10000),
       text: input
     });

     setInput('');
   } 

   return (
     <form className="todo-form form-control " onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Add a Task" 
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        />
        <button className="todo-button btn-sm btn-secondary ms-1">Submit Task</button>
     </form>
   );
 }
 
 export default TodoForm