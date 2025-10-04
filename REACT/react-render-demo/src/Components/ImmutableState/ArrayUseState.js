import React, { useState } from 'react';

const initState = ['Bruce', 'Wayne'];

const ArrayUseState = () => {
    const [person, setPerson] = useState(initState);

    const handleClick = () => {
        const newPersons=[...person]
        newPersons.push('clark')
        newPersons.push('kent')
        setPerson(newPersons)
    }

    console.log('ArrayUseState Render');

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {person.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}

export default ArrayUseState;




