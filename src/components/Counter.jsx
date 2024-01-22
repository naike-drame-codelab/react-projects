import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return(<>
        <h1 className="m-5 scroll-m-20 text-lg font-bold tracking-tight lg:text-3xl">Counter</h1>
        <div className="flex text-center" >
            <h2 className="m-5 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">{count}</h2>
        </div>

        <section>
            <button onClick={handleIncrement} className="m-3 font-bold py-3 px-5 bg-slate-800 rounded-md text-white">+</button>
            <button onClick={handleDecrement} className="font-bold m-3 py-3 px-5 bg-slate-800 rounded-md text-white">-</button>
            <button onClick={handleReset} className="font-bold m-5 p-3 bg-transparent border-slate-800 border-2 rounded-md text-slate-800">Reset</button>
        </section>
    </>)
}

export default Counter;