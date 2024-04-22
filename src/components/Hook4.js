import React, { useState } from 'react'

function Hook4() {
    const [name, setName] = useState(" ");

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`The name your Enter was: ${name}`)
    }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label>
            Enter Your Name: 
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <input type='submit' />
      </form>
    </div>
  )
}

export default Hook4
