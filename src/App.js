import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("http://localhost:3005/todos");
        setLoading(true);
        setTodos(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  const newTodoList = async (newTask) => {
    const newTodo = { id: uuidv4(), task: newTask, complete: false };

    const res = await axios.post("http://localhost:3005/todos/", newTodo);
    setTodos([...todos, res.data]);
    console.log(todos);
  };

  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-semibold text-white mb-3">To Do List</h1>
        {loading === false ? (
          <h1 className="text-4xl text-yellow-600 font-bold text-center">
            {" "}
            Loading...{" "}
          </h1>
        ) : (
          <div>
            <Form newTodoList={newTodoList} />
            <List todos={todos} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
