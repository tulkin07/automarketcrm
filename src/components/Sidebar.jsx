import ChartIcon from "../assets/svg/chart.svg"
import ListIcon from "../assets/svg/list.svg"
import LogOutIcon from "../assets/svg/log-out.svg"
import SettingsIcon from "../assets/svg/settings.svg"
import UsersIcon from "../assets/svg/users.svg"

import Logo from "../assets/svg/logotip.svg"

import { useAuthContext } from '../context/AuthContext'
import { Link, NavLink } from "react-router-dom"

export default function Sidebar() {
  const { setAuth } = useAuthContext()

  return (
    <div className='text-[#16181D] flex flex-col justify-between h-screen py-0 pb-4 px-8 p-5 min-w-[250px] max-w-[250px] bg-[#c2d3e7ab] overflow-y-auto'>
      <div>
        <img className='p-2 pb-4' src={Logo} alt="" />
        <ul className='flex flex-col gap-2 mt-5 text-gray-500'>
          <li className=''>
            <NavLink to={"/dashboard"} className="flex gap-5 p-2">
              <img src={ChartIcon} />
              <span className='text-[14px] text-inherit font-medium '>Dashboard</span>
            </NavLink>
          </li>
          <li className=' p-2'>
            <NavLink to={"/users"} className="flex gap-5">
              <img src={UsersIcon} />
              <span className='text-[14px] text-inherit font-medium '>Foydalanuvchilar</span>
            </NavLink>
          </li>
          <li className='flex gap-5 p-2'>
            <NavLink to={"/news"} className="flex gap-5">

              <img src={ListIcon} />
              <span className='text-[14px] text-inherit font-medium '>Elonlar</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-col gap-2 border-t-2 pt-2 border-[#E0E2E6]'>
          <li className='flex gap-5 p-2'>
            <img src={SettingsIcon} />
            <span className='text-[14px] text-inherit font-medium'>Sozlamalar</span>
          </li>
          <li className='flex gap-5 p-2 cursor-pointer' onClick={() => setAuth(false)}>
            <img src={LogOutIcon} />
            <span className='text-[14px] text-inherit font-medium'>Chiqish</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
