import { useRecoilState } from "recoil";
import { todoListAtom } from "./recoil/atom/todoAtom";

export const TodoItem = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListAtom)
    const index = todoList.findIndex((listItem) => listItem.id === item.id)

    const editItemText = (event) => {
        const newList = replatItemAtIndex(todoList, index, {
            ...item,
            text: event.target.value
        })

        setTodoList(newList)
    }

    const toggleItemComplete = () => {
        const newList = replatItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete
        })
        setTodoList(newList)
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index)

        setTodoList(newList)
    }

    return (
        <div className="container">
            <input
            className={item.isComplete.toString() === "true" && "done-task"}
            type="text"
            value={item.text}
            onChange={editItemText}
            />
            <input type="checkbox" checked={item.isComplete}
            onChange={toggleItemComplete}/>
            <button className="del-button" onClick={deleteItem}>X</button>
        </div>
    )
}

const replatItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};