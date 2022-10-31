import './App.css';
import React, {useEffect, useState} from "react";
import Tasks from "./Components/Tasks";
import {tasksList} from "./Data/data";


function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log("::::effect")
        setTasks(tasksList)
    },[])

    const selectChange = (id, newStatus) => {

        const newState = tasks.map(task => {
            if (id === task._id) {
                task.status = newStatus || task.status
            }

            return task
        })

        setTasks(newState)

    }
    const handelAddTask = (title, description, category, status) => {
        setTasks([...tasks, {
            title: title,
            description: description,
            _id: Math.random(),
            category: category,
            status: status,
        }])
    }

    const changeCategory = (id, newCategory) => {
        const newState = tasks.map(task => {
            if (id === task._id) {
                task.category = newCategory || task.category
            }
            return task;
        })
        setTasks(newState)
    }

    return (
        <div className={"contenierTasks"}>
            <Tasks handelAddTask={handelAddTask}
                   changeCategory={changeCategory}
                   selectChange={selectChange}
                   name={"blocked"}
                   filter={tasks.filter(task => task.status === "blocked")}/>
            <Tasks handelAddTask={handelAddTask}
                   changeCategory={changeCategory}
                   selectChange={selectChange}
                   name={"todo"}
                   filter={tasks.filter(task => task.status === "todo")}/>
            <Tasks handelAddTask={handelAddTask}
                   changeCategory={changeCategory}
                   selectChange={selectChange}
                   name={"inProgres"}
                   filter={tasks.filter(task => task.status === "inProgres")}/>
            <Tasks handelAddTask={handelAddTask}
                   changeCategory={changeCategory}
                   selectChange={selectChange}
                   name={"done"}
                   filter={tasks.filter(task => task.status === "done")}/>
        </div>
    );
}

export default App;
