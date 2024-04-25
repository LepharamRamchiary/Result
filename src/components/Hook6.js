import React, { useEffect, useState } from 'react'


function Hook6() {
  const [count , setCount] = useState(0);

  useEffect(() =>{
    document.title = `You click ${count} times`;
  })

  return (
    <div>
      <h1>Hello There</h1>
      <button onClick={() => setCount(count+1)} >click to add Num{count}</button>
    </div>
  )
}

export default Hook6
