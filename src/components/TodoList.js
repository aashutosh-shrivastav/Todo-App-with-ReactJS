import React from 'react';


const TodoList  = ({todos ,setTodos, filteredTodos})  =>  {


    const Todo  = filteredTodos.map(todo =>{
        const deleteHandler = ()  =>{
            setTodos(todos.filter((el) => el.id  !==todo.id));
        }

        const completeHandaler = ()=>{
            setTodos(
                todos.map((item)=>{
                    if(item.id=== todo.id){
                        return {
                            ...item,completed : !item.completed
                        }
                    }
                    return item;
                })
            );
        }

        return (
            <div className = "todo" >
                <li key  = {todo.id} className = {`todo-item  ${todo.completed ? "completed " : ""}`}>
                   {todo.text}
                </li>
                <button onClick = {completeHandaler} className = "complete-btn"><i className = "fas fa-check" ></i></button>
                <button onClick = {deleteHandler} className = "trash-btn"><i className = "fas fa-trash" ></i></button>

            </div>
        );
    });
/*
    const Todo = () => {

        return(
            <div className = "todo" >
                <li className = "todo-item">
                    HEYY
                </li>
                <button className = "complete-btn"><i className = "fas fa-check" ></i></button>
                <button className = "trash-btn"><i className = "fas fa-trash" ></i></button>

            </div>
        );
    }
*/
    return(
        <div className = "todo-container">
            <ul className="todo-list">
                {Todo}
            </ul>
        </div>
    );
}

export default TodoList;