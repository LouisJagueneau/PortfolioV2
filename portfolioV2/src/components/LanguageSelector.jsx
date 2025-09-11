import { useState,  } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

function LanguageSelector() {

    const {i18n} = useTranslation()
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState('EN');

    const languages = ['EN', 'FR'];

    function changeLanguage(country) {
        setIsSelected(country);
        i18n.changeLanguage(country)
        setIsOpen(!isOpen);
    }
    return (
        <div className="">
            <div className="relative inline-flex flex-col text-text dark:text-text-dark">
                <div
                    className={`inline-flex items-center gap-1  cursor-pointer px-4 py-2 ${isOpen ? 'rounded-t-md' : 'rounded-md'} bg-bg-light hover:bg-hover-bg-light dark:bg-bg-light-dark dark:hover:bg-hover-bg-light-dark`}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className="font-poppins font-light">{isSelected.toLocaleUpperCase()}</span>
                    <IoIosArrowDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} />
                </div>
                <div
                    className={`absolute top-full w-full ${isOpen ? 'block' : 'hidden'} transition-all duration-150 rounded-b-md bg-bg-light hover:bg-hover-bg-light dark:bg-bg-light-dark dark:hover:bg-hover-bg-light-dark`}
                    /* onClick={''}*/>
                    <ul className="">
                        {languages.map((language) => (
                            <li key={language}
                                className={`${isSelected.toLocaleUpperCase() === language ? 'hidden' : 'flex'} cursor-pointer px-4 py-1 font-poppins font-light`}
                                onClick={() => changeLanguage(language.toLocaleLowerCase())}>
                                {language}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default LanguageSelector