import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";

function DisplayMedia({icon}) {
    return (
        <div className="rounded-full border-2 border-black/70 text-black/70 dark:text-white/70 dark:border-white/70 p-3 hover:bg-black/70 hover:text-bg-light transition-all duration-300 cursor-pointer">
            <icon/>
        </div>
    )
}


export default DisplayMedia