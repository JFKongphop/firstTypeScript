import React from "react";
import Item from "./models/items"
import Task from "./Task";

interface TaskListProp{
    items: Item[]
}

const TaskList = (props:TaskListProp):JSX.Element => {
    const allTasks = props.items.map((element) =>
        <li key={element.id}>{element.name}</li>
    )
    return (
        <div>
            <h1>Today to do list</h1>
            <ul>
                {allTasks}
            </ul>
        </div>
    )
}

export default TaskList;