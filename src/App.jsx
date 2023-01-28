import { useState, useEffect } from 'react';
import Column from './Components/Column'
import results from './Objects/Tasklist'
//import { db } from './Database/firebase'

function App() {
  const [count, setCount] = useState(0)
  const column = results.map((curr,key) => {
    return curr[key]
  })
  //read
  // useEffect(() => {
  //   onValue(ref(db), snapshot => {
  //     const data = snapshot.val();
  //     if(data !== null){
        
  //     }
  //   }
  // })
  console.log(column)
  return (
    <div className="App">
      <div className="background">
        <div className="nav">
          <ul>
            <li className="brand-icon"></li>
            <li>Projects</li>
            <li>Tasks</li>
            <li>Boards</li>
          </ul>
          <div className=''>
            <h3>Project Name</h3>
            <h2>Boards Name</h2>
            <ul>
              <li className="">QUICK FILTERS:</li>
              <li>All Tasks</li>
              <li>My Tasks</li>
              <li>Unnasigned</li>
            </ul>
          </div>
        </div>
        <div className='column-container'>
          <Column name="Groom" tasks={column}/>
        </div>
      </div>
    </div>
  )
}

export default App
