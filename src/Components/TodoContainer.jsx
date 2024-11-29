import React, { Component, useState } from 'react'
import '../Style/TodoContainer.css';


function TodoContainer() {
    const [task, setTask] = useState("");
    const [taskContainer, setTaskContainer] = useState([]);
    const [classText, setClassText] = useState([]);

    const getTask = (e) => {
        setTask(e.target.value);
    };

    const sub = () => {
        if (task.trim() !== "") {
            setTaskContainer([...taskContainer, task]);
            setClassText([...classText, "uncompleted"]); 
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = taskContainer.filter((_, i) => i !== index);
        const updatedClasses = classText.filter((_, i) => i !== index);
        setTaskContainer(updatedTasks);
        setClassText(updatedClasses);
    };

    const toggleClassName = (index) => {
        setClassText((prevClasses) => {
            const updatedClasses = [...prevClasses];
            updatedClasses[index] = prevClasses[index] === "uncompleted" ? "completed" : "uncompleted";
            return updatedClasses;
        });
    };

    return (
        <div className="container">
            <div className="content">
                <h1>To-Do List</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="input-container">
                        <input
                            type="text"
                            className="text"
                            placeholder="What is the task today?"
                            onChange={getTask}
                            value={task}
                        />
                        <input type="submit" value="Add Task" className="sub" onClick={sub} />
                    </div>
                </form>
                <div className="text">
                    <ul>
                        {taskContainer.map((item, index) => (
                            <div className="text-content" key={index}>
                                <li>
                                    <p className={classText[index]} onClick={() => toggleClassName(index)}>
                                        {item}
                                    </p>
                                    <i className="fa-solid fa-trash" onClick={() => deleteTask(index)}></i>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoContainer;
