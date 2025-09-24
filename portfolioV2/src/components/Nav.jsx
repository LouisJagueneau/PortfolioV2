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
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation();

    const location = useLocation()
    const navigate = useNavigate()

    const handleWorkClick = () => {
        if (location.pathname === '/') {
            const section = document.getElementById('work')
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
        }
        else {
            navigate('/', { state: { scrollTo: 'work' } });
        }
    }

    const handleEducationClick = () => {
        if (location.pathname === '/') {
            const section = document.getElementById('education')
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
        }
        else {
            navigate('/', { state: { scrollTo: 'education' } });
        }
    }
    const handleAboutClick = () => {
        if (location.pathname === '/') {
            const section = document.getElementById('about')
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
        }
        else {
            navigate('/', { state: { scrollTo: 'about' } });
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div className="z-100">
            {/* Menu Button */}
            <button
                className="relative inline-flex items-center px-4 h-10 bg-bg-light dark:dark:bg-bg-dark rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-light-dark"
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
                <div className={` ${isOpen ? 'absolute' : 'hidden'} min-h-screen w-[19rem] bg-bg-light dark:dark:bg-bg-dark top-0 right-0 z-10 transition-all duration-300`}>

                    {/* Top Element */}
                    <div className="flex items-center justify-between mx-5 my-3">
                        <button
                            className="relative inline-flex px-2 py-2 rounded-md bg-bg-ultralight dark:bg-bg-dark hover:bg-hover-bg-light dark:hover:bg-hover-bg-light-dark cursor-pointer"
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
                                <Link to='/'><li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight dark:hover:bg-hover-bg-light-dark  cursor-pointer px-2"> <GoHome className="text-[1.2rem]" />{t('nav.home')}</li></Link>
                                <li onClick={() => { handleAboutClick(); setIsOpen(!isOpen) }} className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight dark:hover:bg-hover-bg-light-dark  cursor-pointer px-2"> <FaRegUser className="text-[1.0rem]" />{t('nav.about')}</li>
                                <li onClick={() => { handleWorkClick(); setIsOpen(!isOpen) }} className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight dark:hover:bg-hover-bg-light-dark  cursor-pointer px-2"> <PiBagSimple className="text-[1.2rem]" />{t('nav.experiences')}</li>
                                <li onClick={() => { handleEducationClick(); setIsOpen(!isOpen) }} className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight dark:hover:bg-hover-bg-light-dark cursor-pointer px-2"> <IoSchoolOutline className="text-[1.2rem]" />{t('nav.education')}</li>
                                <Link to="/projects"><li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight dark:hover:bg-hover-bg-light-dark  cursor-pointer px-2"> <GoLightBulb className="text-[1.2rem]" />{t('nav.projects')}</li></Link>
                            </div>
                            <Link to="/contact"><li className="text-text-muted dark:text-text-muted-dark font-poppins text-[1.0rem] flex gap-4 items-center py-3 rounded-md hover:bg-bg-ultralight dark:hover:bg-hover-bg-light-dark  cursor-pointer px-2"> <FaPhoneAlt className="text-[0.9rem]" />{t('nav.contacts')}</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav