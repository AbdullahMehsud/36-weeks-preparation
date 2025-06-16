import React, { useEffect, useState } from 'react'

function CleanUp() {
    const [widthCount, setWidthCount] = useState()

    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth)
        return () => {
            window.removeEventListener('resize', currentScreenWidth)
        }
    })
    
  return (
    <div className="border border-white w-96  bg-[#333446] text-white flex justify-center rounded">
      <div className="flex justify-center gap-2 p-2">
        <p className="p-2">{`The size of the window ${widthCount}`} </p>
      </div>
    </div>
  )
}

export default CleanUp