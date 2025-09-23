import { FaQuoteRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function QuoteBox() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-4 p-4  bg-bg-light dark:bg-bg-light-dark rounded-md
                        md:h-full">
            <div className="flex flex-row justify-between">
                <span className="text-text dark:text-text-dark font-poppins font-semibold flex items-center gap-2 2xl:text-[1.05rem]">
                    <span className="bg-primary h-1 w-2 flex rounded-full"></span>
                    {t('quote.author')}
                </span>
                <FaQuoteRight className="text-3xl text-[#3F3D56] dark:text-text-dark" />
            </div>
            <p className="text-text-muted dark:text-text-muted-dark text-[0.90rem]   text-justify 2xl:text-[1.0rem]">{t('quote.text')}</p>
        </div>
    )
}

export default QuoteBox