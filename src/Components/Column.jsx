import { useState } from 'react'
import Task from './Task'

function Column(props) {
  const [column, setColumn] = useState(0)
  let tasks = props.tasks

  const draggingOver = e => {
    e.preventDefault();
    if(e.target.classList.contains("column"|| "task" || "attributes")){
    
    e.target.classList.toggle("dotted")
    }
  }
  console.log(tasks)
  return (
    <div droppable="true" onDragOver={(e) => draggingOver(e)} className="column">
      <h2>{props.name}</h2>
      {tasks.map((curr,key) => {
        return (
          <Task task={curr} key={key}/>
        )
      })}
    </div>
  )
}

export default Column
