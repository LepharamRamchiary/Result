import React, { useState } from 'react'
import Hook8 from './Hook8';

function Hook9() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <Hook8/>}
        </div>
    )
}

export default Hook9
