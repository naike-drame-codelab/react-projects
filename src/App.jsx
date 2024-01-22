import Counter from "./components/Counter";
import MealAPI from "./components/MealAPI";
import Todo from "./components/Todo"
import Calculator from "./components/Calculator";
import ToggleColor from "./components/ToggleColor";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <Calculator />
      <hr />
      {/* <ToggleColor />
      <hr /> */}
      <MealAPI />
      <hr />
    </>
  )
}

export default App
