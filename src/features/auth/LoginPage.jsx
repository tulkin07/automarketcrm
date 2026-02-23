
export default function LoginPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form className="mx-auto rounded-2xl p-5 w-120 border-2 border-gray-200">
                <h3 className="text-2xl text-center">Sign in</h3>
                <div className="flex flex-col gap-5 my-5 justify-start">
                    <input required type="text" className="w-full h-15 bg-[#e6e6e6] rounded-2xl focus:outline-0 px-5" placeholder="Login" />
                    <input required type="password" className="w-full h-15 bg-[#e6e6e6] rounded-2xl focus:outline-0 px-5" placeholder="Password" />
                </div>
                <button className="bg-blue-700 w-full py-2.5 rounded-2xl text-xl cursor-pointer text-white">Login</button>
            </form>
        </div>
    )
}
