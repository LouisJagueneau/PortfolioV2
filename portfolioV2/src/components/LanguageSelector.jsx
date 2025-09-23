import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["en", "fr"]; // codes i18n

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  }

  return (
    <div className="z-99">
      <div className="relative inline-flex flex-col text-text dark:text-text-dark">
        {/* Bouton */}
        <div
          className={`inline-flex items-center gap-1 cursor-pointer px-4 py-2 ${
            isOpen ? "rounded-t-md" : "rounded-md"
          } bg-bg-light hover:bg-hover-bg-light dark:bg-bg-light-dark dark:hover:bg-hover-bg-light-dark`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-poppins font-light">
            {i18n.language.toUpperCase()}
          </span>
          <IoIosArrowDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-200`}
          />
        </div>

        {/* Dropdown */}
        <div
          className={`absolute top-full w-full ${
            isOpen ? "block" : "hidden"
          } transition-all duration-150 rounded-b-md bg-bg-light dark:bg-bg-light-dark`}
        >
          <ul>
            {languages.map((lang) => (
              <li
                key={lang}
                className={`${
                  i18n.language === lang ? "hidden" : "flex"
                } cursor-pointer px-4 py-1 font-poppins font-light`}
                onClick={() => changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
