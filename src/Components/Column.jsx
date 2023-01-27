import { useState } from 'react'
import Task from './Task'

function Column(props) {
  //const [count, setCount] = useState(0)
  let tasks = props.tasks

  const listItems = tasks.map((task) => 
      <Task task={task}/>
);

  return (
    <div className="column">
      <h2>{props.name}</h2>
      {listItems}
    </div>
  )
}

export default Column
