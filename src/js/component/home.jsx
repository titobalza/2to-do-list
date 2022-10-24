import React from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";




//create your first component

const Home = () => {
	return (
		<>
			<div className="todo-app bg-light text-center">
				<h1 className="display-3">To Do List</h1>
				<TodoList/>
			</div>
			<div>
				
			</div>
			
		</>
	);
};

export default Home;