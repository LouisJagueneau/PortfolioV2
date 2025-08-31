import { FaQuoteRight } from "react-icons/fa";

function QuoteBox() {
    return (
        <div className="flex flex-col gap-4 p-4  bg-bg-light dark:bg-bg-dark border-2">
            <div className="flex flex-row justify-between">
                <span className="text-text dark:text-text-dark font-poppins font-semibold flex items-center gap-2"><span className="bg-primary h-1 w-2 flex rounded-full"></span> Cender Xenos</span>
                <FaQuoteRight className="text-3xl text-[#3F3D56]" />
            </div>
            <p className="text-text-muted dark:text-text-muted-dark text-[0.85rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi tristique sem ultricies molestie. Fusce lacinia metus nec condimentum tincidunt. Nunc in molestie ligula.</p>
        </div>
    )
}

export default QuoteBox