import { useEffect, useState } from "react";
import '../styles/styles.css';

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    return <>
        <h1 className="m-5 scroll-m-20 text-lg font-bold tracking-tight lg:text-3xl">Calculator</h1>

        <form name="calc" className="calculator" >
            <input type="text" className="value" value={inputValue}/>
            <span className="num clear">C</span>
            <span>/</span>
            <span>*</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>-</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>+</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>0</span>
            <span>00</span>
            <span>.</span>
            <span>=</span>
        </form>
    </>
}

export default Calculator