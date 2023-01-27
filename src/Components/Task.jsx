import { useState } from 'react'

function Task(props) {
    //const [count, setCount] = useState(0)
    const task = props.task
    return (
        <div className="task">
            <h1>{task.title}</h1>
            <p>{task.summary}</p>
            <div className={task.priority}>

            </div>
        </div>
    )
    }

export default Task