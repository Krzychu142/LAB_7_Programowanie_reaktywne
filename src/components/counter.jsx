import React, {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span className='badge badge-secondary m-2' style={{color: 'black'}}>{count}</span>
            <button className='btn btn-secondary m-2' onClick = {  () => setCount(count + 1)}>dodaj</button>
            <button className='btn btn-danger m-2' onClick= { () => setCount(count - 1)}>odejmij</button>
            <button className='btn btn-primary m-2' onClick={ () => setCount(0)}>zeruj</button>
        </div>
    );
}

export default Counter;