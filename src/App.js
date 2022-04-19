import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";
const ACTIONS = {
  ADD_TODO: "add-todo",
};
const newTodo = (name) => ({ id: Date.now(), name: name, isComplet: false });
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
  }
};
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>React reducer demo</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
