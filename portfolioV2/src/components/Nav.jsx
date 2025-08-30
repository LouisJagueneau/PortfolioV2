import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import DarkModeToggle from "./DarkModeToggle";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {/* Menu Button */}
            <button
                className="relative inline-flex items-center px-4 h-10 bg-bg-light dark:bg-bg-light-dark rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-light-dark"
                onClick={() => setIsOpen(!isOpen)}>
                <RiMenu3Fill className="text-text dark:text-text-dark text-xl" />
            </button>

            {/* Open Menu */}
            <div>
                {/* Backdrop-Blur */}
                <div
                    className={` ${isOpen ? 'absolute' : 'hidden'} min-h-screen w-full top-0 left-0 z-9 backdrop-blur-xs`}
                    onClick={() => setIsOpen(!isOpen)}>
                </div>
                {/* Menu */}
                <div className={` ${isOpen ? 'absolute' : 'hidden'} min-h-screen w-[19rem] bg-bg-light dark:bg-bg-light-dark top-0 right-0 z-10 transition-all duration-300`}>

                    {/* Top Element */}
                    <div className="flex items-center justify-between mx-5 my-3">
                        <button
                            className="relative inline-flex px-2 py-2 rounded-md bg-bg-ultralight dark:bg-bg-ultralight-dark hover:bg-hover-bg-light dark:hover:bg-hover-bg-light-dark cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}>
                            <IoClose className="text-text dark:text-text-dark text-2xl" />
                        </button>
                        <div className="inline-flex mt-1">
                            <DarkModeToggle />
                        </div>
                    </div>

                    {/* Navigation Element */}
                    <div className="mx-5 mt-8">
                        <ul className="flex flex-col gap-7">
                            <div>
                                <li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight hover:dark:bg-bg-ultralight-dark cursor-pointer px-2"> <GoHome className="text-[1.2rem]" />Home</li>
                                <li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight hover:dark:bg-bg-ultralight-dark cursor-pointer px-2"> <FaRegUser className="text-[1.0rem]" />About me</li>
                                <li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight hover:dark:bg-bg-ultralight-dark cursor-pointer px-2"> <PiBagSimple className="text-[1.2rem]" />Experiences</li>
                                <li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight hover:dark:bg-bg-ultralight-dark cursor-pointer px-2"> <IoSchoolOutline className="text-[1.2rem]" />Education</li>
                                <li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight hover:dark:bg-bg-ultralight-dark cursor-pointer px-2"> <GoLightBulb className="text-[1.2rem]" />Projects</li>
                            </div>
                            <li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight hover:dark:bg-bg-ultralight-dark cursor-pointer px-2"> <FaPhoneAlt className="text-[0.9rem]" />Contacts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav