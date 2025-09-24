import DisplayMedia from "./DisplayMedia"
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";

function MediaSideBar() {
    return (
        <div className="bg-bg-light dark:bg-bg-dark rounded-md p-4 inline-flex flex-col justify-between gap-2
                        lg:flex-row lg:w-full
                        2xl:grid 2xl:grid-cols-2 2xl:justify-items-center 2xl:gap-x-5 2xl:gap-y-5">
            <DisplayMedia Icon={FiGithub} link={"https://github.com/LouisJagueneau"} />
            <DisplayMedia Icon={MdMailOutline} link={"mailto:louis.jagueneau@viacesi.fr"}/>
            <DisplayMedia Icon={FaFigma} link={"https://www.figma.com/@LouisJagueneau"} />
            <DisplayMedia Icon={FaLinkedinIn} link={"https://www.linkedin.com/in/louis-jagueneau-045902251/"} />
        </div>
    )
}

export default MediaSideBar