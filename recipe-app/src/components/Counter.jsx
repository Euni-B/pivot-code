import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increaseNumber = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <p>Count {count}</p>
            <button onClick={increaseNumber}>ADD</button>
        </div>
    );
}

export default Counter;