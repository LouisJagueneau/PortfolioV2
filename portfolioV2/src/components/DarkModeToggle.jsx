import { IoSunny } from "react-icons/io5";
import { useEffect, useState } from "react";

function DarkModeToggle() {

    const [isDark, setIsDark] = useState(localStorage.getItem('darkMode'))

    useEffect(() => {
        setIsDark(localStorage.getItem('darkMode'));
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', '')
        }
    }, [isDark])

    return (
        <div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="
                    h-6 w-13 border-1 rounded-full 
                    peer-focus:outline-none
                    after:absolute after:bg-black after:content-[''] after:h-5 after:w-5 after:rounded-full after:top-[2px] after:left-[3px]" ></div>
            </label>
        </div>
    )
}

export default DarkModeToggle