
import React, { useState, useRef, useEffect } from 'react';
import './Main.css';

const Main = () => {

    const randomColors = ['#ff595e', '#ffca3a', '#eeb0ef', '#1982c4', '#6a4c93'];
    const messages = ['Well done!', 'Nice work!', 'Keep going!', 'To do completed! Nice work']
    const [toDoList, setToDoList] = useState([]);
    const [messageActive, setMessageActive] = useState(false);

    function addToDoHandler(event, str) {
        event.preventDefault();

        let todo = {
            id: toDoList.length,
            value: event.target[0].value,
            completed: false,
            backgroundColor: randomColors[Math.floor(Math.random() * 4)]
        }
        event.target[0].value = "";

        setToDoList(toDoList.concat(todo));
    }

    function handleCheck(id) {
        setMessageActive(true);
        setTimeout(() => {
            const newToDoList = toDoList.filter((todo) => todo.id !== id);
            setToDoList(newToDoList);
            setMessageActive(false);
        }, 1500)
    }


    return(
        <main>
            <div className="content-container">
                <p className={messageActive === true ? `complete-message down` : 'complete-message'}>{messages[Math.floor(Math.random() * 3)]}</p>
                <h2>To do</h2>
                <ul className="todo-list">
                    {toDoList.map((todo) => {
                        return(
                            <li key={todo.id} style={{backgroundColor: todo.backgroundColor}} className="todo-item">
                                <p>{todo.value}</p>
                                <input className="checker" value={todo.id} type="checkbox" onChange={() => {handleCheck(todo.id)}}/>
                            </li>
                        )
                    })}
                </ul>
                <form onSubmit={addToDoHandler}>
                    <input name="todo" maxLength="30" type="text" placeholder="New to do..."/>
            </form>
            </div>
        </main>
    );
}

export default Main;