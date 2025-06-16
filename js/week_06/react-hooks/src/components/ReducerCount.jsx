import React, { useReducer } from 'react'
import reducer from './reducer'

function ReducerCount() {
    const initialValue = 0;
    const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="border border-white w-96  bg-[#333446] text-white flex justify-center rounded">
      <div className="flex justify-center gap-2 p-2">
        <p className="p-2">{`Count ${count}`} </p>
        <button onClick={() => dispatch({type: "INC"})}  className="px-2 bg-[#7F8CAA]">+</button>
        <button onClick={() => dispatch({type: "DEC"})} className="px-2 bg-[#7F8CAA]">-</button>
        <button onClick={() => dispatch({type: "RESET"})} className="px-2 bg-[#7F8CAA]">Rest</button>
      </div>
    </div>
  )
}

export default ReducerCount