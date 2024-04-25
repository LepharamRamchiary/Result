import React, { useEffect, useState } from 'react'

function Hook7() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect (() => {
        console.log("Updating use Effic")
        document.title = `You click ${count} times`
    },[count])

  return (
    <div>
        <h1>7th lecture</h1>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>add the num{count}</button>
    </div>
  )
}

export default Hook7