import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count
    //no dependancy passed runs on every render
    //with empty array runs only on first render


    // prop state value passed runs on the first render 
    // any time any dependancy value changes
  }, [count])
  
  return (
    <div className="border border-white w-96  bg-[#333446] text-white flex justify-center rounded">
      <div className="flex justify-center gap-2 p-2">
        <p className="p-2">{`Count ${count}`} </p>
        <button onClick={() => setCount((prev) => prev + 1)} className="px-2 bg-[#7F8CAA]">+</button>
        <button onClick={() => setCount((prev) => prev === 0 ? setCount(0) : prev -1)} className="px-2 bg-[#7F8CAA]">-</button>
      </div>
    </div>
  );
}

export default Counter;
