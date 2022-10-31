import React, {useState} from 'react';
import Task from "./Task";


function Tasks({name, filter, selectChange, changeCategory, handelAddTask}) {


    const [isAdd, setIsAdd] = useState(true)
    const [titleValue, setTitleValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("JS")


    const addToggle = () => {
        setIsAdd(!isAdd)
    }
    const changeTitleValue = (e) => {
        setTitleValue(e.target.value)
    }

    const changeDescriptionValue = (e) => {
        setDescriptionValue(e.target.value)
    }

    const addTask = () => {
        handelAddTask(titleValue, descriptionValue, categoryValue, name)
        setTitleValue("")
        setDescriptionValue("")
        setIsAdd(!isAdd)
    }

    const cancelTask = () => {
        setIsAdd(!isAdd)
    }


    const changeCategoryValue = (e) => {
        setCategoryValue(e.target.value)
    }

    return (
        <div className={"tasks"}>
            <h2>{name}</h2>
            <div>{
                filter.map(task => <Task task={task}
                                         key={task._id}
                                         selectChange={selectChange}
                                         changeCategory={changeCategory}
                />)
            }
                {
                    isAdd
                        ?
                        <button onClick={addToggle}>Add</button>
                        :
                        <div className={"addMod-box"}>
                            <div className={"container"}>
                                <div className={"selectsContainer"}>
                                    <input value={titleValue} onChange={changeTitleValue}/><br/>
                                    <input value={descriptionValue} onChange={changeDescriptionValue}/><br/>
                                    <select>
                                        <option value={name}> {name}</option>
                                    </select><br/>
                                {/*<select value={statusValue}*/}
                                {/*        onChange={changeStatusValue}*/}
                                {/*        name="options"*/}
                                {/*        id="options">*/}
                                {/*    <option>done</option>*/}
                                {/*    <option>todo</option>*/}
                                {/*    <option>blocked</option>*/}
                                {/*    <option>inProgres</option>*/}
                                {/*</select><br/>*/}
                                    <select value={categoryValue}
                                            onChange={changeCategoryValue}
                                            name="options"
                                            id="options">
                                        <option>JS</option>
                                        <option>ILLUMITY</option>
                                        <option>MOLTONIC</option>
                                        <option>MITROC</option>
                                        <option>SLAMBDA</option>
                                        <option>COREPAN</option>
                                        <option>PHORMULA</option>
                                    </select><br/>

                                    <button onClick={addTask}>Done</button>
                                    <button onClick={cancelTask}>Cancel</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>

    )
};

export default Tasks;