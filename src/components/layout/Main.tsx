
import { Outlet } from 'react-router-dom'


export default function Main() {
  return (
    <div className='p-5 max-h-[calc(100vh-80px)] overflow-y-auto'>
       <Outlet/>
    </div>
  )
}
