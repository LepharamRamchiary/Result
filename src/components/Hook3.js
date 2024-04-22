import React, { useState } from 'react'

function Hook3() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <h1>Hello World</h1>
            <form>
                <div>
                    <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                    <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
                    <h3>First Name : {name.firstName}</h3>
                    <h3>Last Name : {name.lastName}</h3>
                    <h2>{JSON.stringify(name)}</h2>
                </div>
            </form>
        </div>
    )
}

export default Hook3
