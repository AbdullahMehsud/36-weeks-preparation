import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [myNum, setMyNum] = useState(0)
    const [show, setShow] = useState(false)

    const getValue = () => {
        return setMyNum(prev => prev + 1)
    }

    const countNumber = (num) => {
        for(let i = 0; i <= 100000000; i++){}
        return num
    }
    const CheckData = useMemo(() => {
        return countNumber(myNum)
    }, [myNum])
  return (
    <div className='border border-white w-96  bg-[#333446] text-white flex justify-center rounded'>
        <div className='flex flex-col gap-2 py-2 items-center'>
        <button onClick={getValue} className='bg-red-500  cursor-pointer p-2 text-black border-black rounded'>counter</button>
        <p>my new num :{CheckData} </p>
        <button onClick={() => setShow(!show)} className='bg-white  cursor-pointer p-2 text-black border-black rounded'>{show ? "You clicked me": "click me please"}</button>
        </div>
    </div>
  )
}

export default UseMemoHook