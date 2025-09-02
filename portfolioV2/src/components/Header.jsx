import LanguageSelector from "./LanguageSelector"
import DarkModeToggle from "./DarkModeToggle"
import Nav from "./nav"

function Header() {
    return (
        <div className="border-b-1 border-black/5 dark:border-white/5">
            <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-4 ">
                <div className="flex items-center justify-between">
                    {/* Left-Part (Logo) */}
                    <div className=" text-red-400 sm:text-gray-500 md:text-blue-400 lg:text-amber-400 xl:text-green-400 2xl:text-purple-400">
                        {/* text-text dark:text-text-dark */}
                        <span className="flex items-center gap-1 font-poppins  font-semibold text-[1.75rem] tracking-wide">
                            Louis
                            <span className="text-primary">.</span>
                        </span>
                    </div>

                    {/* Right-Side */}
                    <div>
                        <div>
                            <div className="flex items-center gap-4">
                                <LanguageSelector/>
                                <Nav/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header