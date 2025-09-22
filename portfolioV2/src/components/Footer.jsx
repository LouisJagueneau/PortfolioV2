import { Link } from "react-router-dom"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";function Footer() {
    return (
        <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] mt-5">
            <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 font-poppins mb-4  font-semibold text-[1.75rem] tracking-wide">
                    Louis
                    <span className="text-primary">.</span>
                </span>
                <div className="font-poppins mb-6 flex flex-col items-center sm:flex-row gap-6 text-[1.1rem] text-text dark:text-text ">
                    <Link to='/' className="hover:text-primary">Home</Link>
                    <Link to='/projects' className="hover:text-primary">Projects</Link>
                    <Link to='/contact' className="hover:text-primary">Contact</Link>
                </div>
                <span className="bg-black/10 dark:bg-white/10 w-full h-[0.1rem] "></span>
                <div className="text-text-muted dark:text-text-muted-dark my-2 font-poppins text-[0.85rem] flex flex-row justify-center sm:justify-between w-full">
                    <span className="flex flex-row items-center gap-1">louisjagueneau <AiOutlineCopyrightCircle className="text-[1.0rem]" /> All rights reserved</span>
                    <span className="items-center gap-2 hidden sm:flex"><IoMdMail  className="text-primary"/>louis.jagueneau@viacesi.fr</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

