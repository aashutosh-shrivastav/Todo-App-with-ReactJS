import './App.css';
import React , {useEffect, useState  } from 'react';
//importing form 
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  //use  states
  const [inputText ,setInputText] = useState("");
  const [todos,setTodos]  = useState([]);
  const [status  , setStatus ]  = useState("all");
  const [filteredTodos,setFilterTodos] = useState([]);
//use effects
 
useEffect (()=>{
  getLocalTodos();
},[]);

useEffect(()=>{
  filterHandaler();
  saveLocalTodos();
},[todos,status]);


  //function
  const filterHandaler = ()=>{

    switch(status) {
      case "completed" :
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted" :
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
      default : 
        setFilterTodos(todos)  ;
        break;
    }

  }
  //save to local

  const saveLocalTodos = ()=>{
    localStorage.setItem("todos" , JSON.stringify(todos));
  }

  const  getLocalTodos = ()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Your's To-Do List</h1>
      </header>
      <Form  setInputText  = { setInputText}
             todos = {todos} 
             setTodos = {setTodos}
             inputText = {inputText}
             setStatus = {setStatus}
      />
      <TodoList todos = {todos}
       setTodos  = {setTodos}
       filteredTodos = {filteredTodos}
        />
    </div>
  );
}

export default App;
