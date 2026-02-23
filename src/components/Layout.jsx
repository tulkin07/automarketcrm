
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
    return (
        <div className='flex items-start'>
            <Sidebar />
            <main className='w-full bg-[#eaf5f9] '>
                <Header />
                <div className='p-5 h-[calc(100vh-50px)] overflow-y-auto' >
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
