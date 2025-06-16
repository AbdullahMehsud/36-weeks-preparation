import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    console.log("todo: ", todo);

    addTodo({ todo, complete: false });
    setTodo("");
  };
  return (
    <form onSubmit={add}>
      <div className="">
        <input
          type="text"
          className="w-96 mt-2 h-8 border rounded px-2  bg-[#901E3E] text-white outline-none border-transparent "
          placeholder="Write todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="text-bold bg-[#DC2525] rounded p-1 ml-2 cursor-pointer hover:bg-[#522546] hover:border-white hover:border"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
