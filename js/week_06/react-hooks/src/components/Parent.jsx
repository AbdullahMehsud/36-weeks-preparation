import { useContext } from 'react'
import Child from './Child'
import { AppContext} from './userContext'

function Parent() {
    const userData = useContext(AppContext)
  return (
    <>
    <span className='bg-black text-white' >{`username ${userData.name} age ${userData.age}`}</span>
    <Child/>
    </>
  )
}

export default Parent