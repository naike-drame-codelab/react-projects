import { useState } from "react";

const generateId = () => {
    return Math.floor(Math.random() * 100)
}

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        setTodos((todos) => 
        todos.concat({
                text: input,
                id: generateId()
            })
        );
        setInput("");
        
    };

    const removeTodo = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id));
    

    return (
        <>
            <div className="border-2 border-slate-800 m-5 p-5 text-slate-800 justify-center">
                <h1 className="m-5 scroll-m-20 text-lg font-bold tracking-tight lg:text-3xl">Todo List</h1>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a todo..." className="border-2 border-slate-600 rounded-md my-3 mb-5 mx-5 py-3 px-5 max-w-400px"/>

                <button onClick={handleSubmit} className="m-3 font-bold py-3 px-5 bg-slate-800 rounded-md text-white">Submit</button>

                <ul>
                    {
                        todos.map(({text, id}) => {
                            return(
                            <li key={id}>
                                <span>{text}</span>
                                <button onClick={() => removeTodo(id)} className="m-1 ml-3 font-bold py-1 px-2 bg-slate-800 rounded-md text-white">X</button>
                                <hr className="my-3" />
                            </li>
                        )})
                    }
                </ul>

            </div>
        </>
    )
}

export default Todo;