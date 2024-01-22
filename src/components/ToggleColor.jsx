import { useState, useEffect } from "react";
import '../styles/styles.css';

const ToggleColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");

    const handleClick = () => {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b": "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffab3b" : "#1b1b1b");
        setButtonStyle(backgroundColor === "white" ? "1b1b1b" : "white");
    }

    return <>
        <h1 className="m-5 scroll-m-20 text-lg font-bold tracking-tight lg:text-3xl">Toggle Color</h1>
            <div className="toggle-container">
                <section style={{backgroundColor, color: textColor}} className="toggle-container">
                    <button onClick={handleClick} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}}>White Theme</button>
                    <h1 content>Hello World</h1>
                </section>

                <section className="content">
                </section>
            </div>

    </>
}

export default ToggleColor;