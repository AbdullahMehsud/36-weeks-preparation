import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
    const [userInput, setUserInput] = useState('')

    // const [count, setCount] = useState()
    const count = useRef(0)
    const inputRef = useRef()
    useEffect(() => {
        count.current = count.current + 1
    })

    const changeBorder = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "#82E0AA"
    }
  return (
    <div className='border border-white w-96  bg-[#333446] text-white flex justify-center rounded'>
        <div className='flex flex-col gap-2 py-2 items-center'>
        <input type="text"
        ref={inputRef}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className='bg-white text-black p-2 border-black border-2 rounded' 
        />
        <p>this is the text : {`${count.current}`}</p>
        <button onClick={changeBorder} className='bg-white w-16 cursor-pointer p-2 text-black border-black rounded'>submit</button>
        </div>
    </div>
  )
}

export default UseRefHook