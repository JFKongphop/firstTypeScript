import React from "react";

const Task = (props:any):JSX.Element => {
    return (
        <h1 key={props.id}>Task Component {props.name}</h1>
    )
}

export default Task;