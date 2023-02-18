import "./App.css";
import { useEffect, useState } from "react";

async function getData(id) {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function App() {
  const [id, setId] = useState(5);
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(null);

  function goToPrevious() {
    if (id > 1) {
      setId(id - 1);
    }
  }

  function goToNext() {
    setId(id + 1);
  }

  useEffect(() => {
    async function showData() {
      let dataOfToDo = await getData(id);
      setText(dataOfToDo.title);
      setCompleted(dataOfToDo.completed)
    }
    showData();
  }, [id, completed]);

  return (
    <div className="App">
      <button onClick={() => goToPrevious()}>Previous</button>
      <div>{text}</div>
      <input type = "checkbox" checked = {completed} onChange = {() => setCompleted(!completed)}  /> 
      <button onClick={() => goToNext()}>Next</button>
    </div>
  );
}

export default App;
