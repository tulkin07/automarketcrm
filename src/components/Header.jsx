import SearchIcon from "../assets/svg/search.svg"
import UserAvatarIcon from "../assets/img/user-avatar.png"

export default function Header() {
  return (
    <div className='flex gap-4 justify-end  h-[50px] flex items-center px-10 border-[#E0E2E6] shadow bg-[#c2d3e7ab] '>
        <img src={SearchIcon} alt="" />
        <img src={UserAvatarIcon} alt="" />
    </div>
  )
}
