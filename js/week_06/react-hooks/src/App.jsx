
import "./App.css";
import CleanUp from "./components/CleanUp";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import ReducerCount from "./components/ReducerCount";
import State from "./components/State";
import { TodoMain } from "./components/todoMain";
import UseMemoHook from "./components/useMemoHook";
import UseRefHook from "./components/UseRefHook";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
    {/* <State/>  */}
    {/* <Counter/> */}
    {/* <CleanUp/> */}
    {/* <Parent /> */}
    {/* <ReducerCount/> */}
    {/* {<UseRefHook/>} */}
    <UseMemoHook/>
    {/* <TodoMain/> */}
      </div>
  );
}

export default App;
