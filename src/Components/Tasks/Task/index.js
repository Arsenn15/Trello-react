import React, { useState } from 'react';



function Task({task, selectChange , changeCategory}) {


    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newStatus, setNewStatus] = useState("")
    const [category,setCategory] = useState("")

    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    const complate = () => {
        task.title = newTitle || task.title
        task.description = newDescription || task.description
        selectChange(task._id, newStatus)
        changeCategory(task._id,category)
        setEditMode(!editMode)
    }

    const changeTitle = (e) => {
        setNewTitle(e.target.value)
    }

    const changeDescription = (e) => {
        setNewDescription(e.target.value)
    }
    const handleCancel = () => {
        setEditMode(!editMode)
    }

    const handelSelect = (e) => {
        setNewStatus(e.target.value)

    }

    const handelCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className={"task"}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.category}</div>
            {
                editMode
                    ?
                    <div className={"container"}>
                        <div className={ "selectsContainer"}>
                            <input onChange={changeTitle} defaultValue={task.title}/><br/>
                            <input onChange={changeDescription} defaultValue={task.description}/><br/>

                            <select onChange={handelSelect} defaultValue={task.status} name="options" id="options">
                                <option>done</option>
                                <option>todo</option>
                                <option>blocked</option>
                                <option>inProgres</option>
                            </select><br/>
                            <select onChange={handelCategory} defaultValue={task.category} name="options" id="options">
                                <option>JS</option>
                                <option>ILLUMITY</option>
                                <option>MOLTONIC</option>
                                <option>MITROC</option>
                                <option>SLAMBDA</option>
                                <option>COREPAN</option>
                                <option>PHORMULA</option>
                            </select><br/>

                            <button onClick={complate}>Done</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                    :
                    <div>
                        <button onClick={handleEditMode}>Edit</button>
                    </div>
            }

        </div>
    );
};

export default Task;