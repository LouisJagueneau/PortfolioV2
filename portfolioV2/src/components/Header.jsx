import LanguageSelector from "./LanguageSelector"
import DarkModeToggle from "./DarkModeToggle"
import Nav from "./nav"

function Header() {
    return (
        <div>
            <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
                <div>
                    {/* Left-Part (Logo) */}
                    <div className="border-2 text-red-400 sm:text-gray-500 md:text-blue-400 lg:text-amber-400 xl:text-green-400 2xl:text-purple-400">
                        <span className="flex items-center gap-1 font-poppins text-text dark:text-text-dark font-semibold text-[1.75rem] tracking-wide">
                            Louis
                            <span className="text-primary">.</span>
                        </span>
                    </div>

                    {/* Right-Side */}
                    <div>
                        <div>
                            <div>
                                <LanguageSelector/>
                                <DarkModeToggle/>
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