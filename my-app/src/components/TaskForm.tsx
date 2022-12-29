import React, { useRef } from "react";

interface TaskFormProps{
    onAddItem:(name:string) => void;
}

const TaskForm = (props:TaskFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    
    function workHandler(e:React.FormEvent){
        e.preventDefault();
        const name = inputRef.current!.value;
    
        // lifting the data the the main app
        props.onAddItem(name)
        
        inputRef.current!.value = ""
    }

    return (
        <form onSubmit={workHandler}>
            <input 
                type="text" 
                placeholder="add your work"
                ref={inputRef}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TaskForm;