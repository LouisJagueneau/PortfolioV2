import { LuSun, LuMoon } from "react-icons/lu";
import { useEffect, useState } from "react";

function DarkModeToggle() {

    const [isDark, setIsDark] = useState(localStorage.getItem('darkMode') || 'light')

    useEffect(() => {
        if (isDark === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'dark');
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'light')
        }
    }, [isDark])

    return (
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={isDark === 'dark'} onClick={() => isDark === 'dark' ? setIsDark('light') : setIsDark('dark') }/>
                    <div className="h-8 w-16  rounded-full peer-focus:outline-none bg-gradient-to-b from-[#f1a902] to-[#f5e000] dark:from-[#302ca5] dark:to-[#60aee2] shadow-inner"></div>
                    <div className="absolute bg-bg-light text-[#f1a902] dark:text-[#4a5cc0] dark:bg-bg-light-dark text-md h-6 w-6 rounded-full top-[4px] left-[5px] peer-checked:translate-x-[31px] transition-all duration-300 flex items-center justify-center">
                       {isDark === 'dark' ? <LuMoon/> : <LuSun/> }
                    </div>
            </label>
        </div>
    )
}
export default DarkModeToggle