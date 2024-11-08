// import React from "react";
// import { useState } from "react" ;
import { ChangeEvent, useState } from "react";
import useGetData from "./Hooks/useGetData";

interface dataType {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

function App() {
  const { loading, datas } = useGetData("https://dummyjson.com/todos");
  const [todoDatas, setTodoData] = useState([]);
  const [inpTodo, setInpTodo] = useState("");
  if (loading) {
    return <div>Hello World</div>;
  }
  setTodoData(datas);
  const handleInpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpTodo(e.target.value);
  };
  const handleAddTodo = () => {
    console.log(inpTodo);
    setInpTodo(" ");
    // setTodoData((prev)=>([...prev,inpTodo]))
  };
  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Enter Your todo"
          value={inpTodo}
          onChange={handleInpChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {todoDatas.map((data: dataType) => (
          <li key={data?.id}>
            <p>{data?.todo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
