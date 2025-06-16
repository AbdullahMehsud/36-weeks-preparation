import React from 'react'
import { useContext } from 'react'
import { AppContext } from './userContext'
function Child() {
    const userData = useContext(AppContext)
  return (
    <div className='border border-white w-96  bg-[#333446] text-white flex justify-center rounded'>Child || {`username ${userData.name} age ${userData.age}`}</div>
  )
}

export default Child