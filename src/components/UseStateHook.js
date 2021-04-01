import React, { useState } from 'react';

function UseStateHook() {
    const initialState = 0;
    const [count, setCount] = useState(initialState);
    const [name, setName] = useState({firstName: "", lastName: ""});
    const [numbers, setNumbers] = useState([]);

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }  
    }

    const addNumber = () => {
        setNumbers([
            ...numbers,
            {
                id: numbers.length,
                value: Math.floor(Math.random() * 10) + 1,
            },
        ]);
    }


    return (
        <>
            <div>
                <h1>Counter Example</h1>
                <h3>Counter: {count}</h3>
                <br />
                <button onClick={() => setCount(initialState)}>Rest</button>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                    Increment
                </button>
                <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                    Decrement
                </button>
                <button onClick={incrementByFive}>Increment By 5</button>
            </div>
            <br />
            <div>
                <h1>Object Example</h1>
                
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) =>
                        setName({ ...name, firstName: e.target.value })
                    }
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={(e) =>
                        setName({ ...name, lastName: e.target.value })
                    }
                />
                <h3>{JSON.stringify(name)}</h3>
            </div>

            <div>
                <h1>Array Example</h1>
                <button onClick={addNumber}>Add Number</button>
                <ul>
                    {numbers.map(number => <li key={number.id}>{number.value}</li>)}
                </ul>
            </div>
        </>
    );
}

export default UseStateHook
