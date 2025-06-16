import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isEditing, setIsEditing] = useState(false);
  const { toggle, deleteTodo, updateTodo } = useTodo();

  const toggleCompleted = () => {
    toggle(todo.id);
  };

  const update = () => {
    updateTodo({ ...todo, todo: todoMsg }, todo.id);
    setIsEditing(false);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-2 py-1.5 gap-x-4 shadow-sm shadow-white/50 duration-300 mt-2  ${
        todo.complete ? "bg-[#DC2525]" : "bg-[#901E3E]"
      }`}
    >
      <input
        type="checkbox"
        onChange={toggleCompleted}
        checked={todo.complete}
      />
      <input
        className={`text-white  w-40 h-8 outline-none ${
          todo.complete ? "line-through" : ""
        } rounded mt-2 px-2 duration-300 ${
          isEditing ? "border-black/10 px-2" : "border-transparent"
        } ${todo.complete ? "bg-[#DC2525]" : "bg-[#901E3E]"}`}
        type="text"
        value={todoMsg}
        readOnly={!isEditing}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        disabled={todo.complete}
        className={`text-bold  duration-300 rounded p-1 ml-24  ${
          todo.complete
            ? "bg-[#bd150f]"
            : "bg-[#DC2525] cursor-pointer hover:bg-[#522546] hover:border-white hover:border"
        } border-0 border-transparent`}
        onClick={() => {
          if (todo.complete) return;
          if (isEditing) {
            update();
          } else {
            setIsEditing((prev) => !prev);
          }
        }}
      >
        {isEditing ? "Update" : "Edit"}
      </button>
      <button
        type="submit"
        onClick={() => deleteTodo(todo.id)}
        className={`text-bold ${ todo.complete ? "bg-[#901E3E]":"bg-[#DC2525]"} rounded p-1 ml-2 cursor-pointer hover:bg-[#522546] hover:border-white hover:border`}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
