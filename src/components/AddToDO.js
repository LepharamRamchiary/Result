import React, { useState } from 'react'

export default function AddToDO({onAddTodo}) {
    const [title, setTitle] = useState('');
    return (
        <div>
            <input placeholder='Add Todo'
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
        </div>
    )
}
