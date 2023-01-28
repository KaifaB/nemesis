import { useState } from 'react'
import Task from './Task'

function Column(props) {
  //const [count, setCount] = useState(0)
  let tasks = props.tasks

  return (
    <div className="column">
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
