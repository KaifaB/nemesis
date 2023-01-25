import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

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
        <ul className='phases'>
          <li>Groomed</li>
          <li>In Progress</li>
          <li>In Review</li>
          <li>In QA</li>
          <li>Ready to Deploy</li>
          <li>Complete</li>
        </ul>
      </div>
    </div>
  )
}

export default App
