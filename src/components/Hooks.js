import React, { useState } from 'react'
import { sculptureList } from './data'

function Hooks() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleShowMore() {
        setShowMore(!showMore);
    }

    function handleClick() {
       setIndex(index + 1);
    }

    let seculpture = sculptureList[index];
    return (
        <div>
            <h1>Hello world</h1>
            <button onClick={handleClick}>Next</button>
            <h2><i>{seculpture.name}</i>
                by {seculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleShowMore}>
                {showMore ? 'Hide' : "Show"} details
            </button>
            {showMore && <p>{seculpture.description}</p>}
            <img
                src={seculpture.url}
                alt={seculpture.alt}
            />
            
        </div>
    )
}

export default Hooks
