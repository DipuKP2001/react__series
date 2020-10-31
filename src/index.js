import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return (
    <div>
      <Person/>
      <Welcome/>
    </div>
  );
}

const Person = () => {
  return <h2>John Doe</h2>
}
const Welcome = () => {
  return <p>Welcome</p>
}

ReactDom.render(<Greeting/>,document.getElementById('root'))
