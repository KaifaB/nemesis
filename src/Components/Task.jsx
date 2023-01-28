import { useState } from 'react'

function Task(props) {
    //const [count, setCount] = useState(0)
    const task = props.task

    const onDragStarter = (e, id) => {
        console.log("Drag has started")
    }

    const onClickTask = (e) => {
        
    }
    return (
        <div className="task" 
            draggable 
            onDragStart={(e) => {onDragStarter(e)}}
            onClick={(e) => {onClickTask}}
        >
            <h1>{task.title}</h1>
            <p>{task.summary}</p>
            <div className='attributes'>
                <div className={task.priority}>{task.priority}</div>
                <div>{task.group}</div>
            </div>
        </div>
    )
}

export default Task