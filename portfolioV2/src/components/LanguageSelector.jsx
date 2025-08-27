import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
function LanguageSelector() {

    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState('EN');

    const languages = ['EN', 'FR'];

    function changeLanguage(country) {
        setIsSelected(country);
        // Le truc I8N
        setIsOpen(!isOpen);
    }
    return (
        <div className="">
            <div className="inline-flex flex-col">
                <div
                    className={`relative inline-flex items-center gap-1 bg-bg-light hover:bg-hover-bg-light cursor-pointer px-4 py-2 ${isOpen ? 'rounded-t-md' : 'rounded-md'}`}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className="font-poppins font-light">{isSelected}</span>
                    <IoIosArrowDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} />
                </div>
                <div
                    className={`aboslute left-0 bottom-0 ${isOpen ? 'block' : 'hidden'} transition-all duration-150 bg-bg-light hover:bg-hover-bg-light`}
                    onClick={''}>
                    <ul className="">
                        {languages.map((language) => (
                            <li key={language}
                                className={`${isSelected === language ? 'hidden' : 'flex'} cursor-pointer px-4 py-1 font-poppins font-light `}
                                onClick={() => changeLanguage(language)}>
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