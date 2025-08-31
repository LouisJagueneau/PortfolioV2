import DarkModeToggle from "../components/DarkModeToggle"
import Header from "../components/Header"
import Nav from "../components/nav"
import DisplayMedia from "../components/DisplayMedia";
import NavigationCard from "../components/NavigationCard";
// Icons
import { MdOutlineFileDownload } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";


function Home() {
    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen">
            <Header />

            <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px] mt-[65px]">

                {/* Hero */}
                <div className="mb-8 border-2 border-yellow-400">
                    {/* Student in Engineering */}
                    <div className="mb-6 flex justify-center lg:justify-start">
                        <span className=" uppercase bg-gradient-to-l from-[#0D99FF] to-[#1483D5] bg-clip-text text-transparent tracking-widest font-poppins text-[0.8rem] font-semibold flex items-center gap-2">
                            <span className="bg-primary h-[0.2rem] w-12 rounded-full hidden lg:flex"></span>student in engineering
                        </span>
                    </div>
                    {/* Louis Jagueneau Portfolio */}
                    <div className="mb-6 font-quattrocento font-bold text-[68px] text-center lg:text-start">
                        <h1 className="text-primary ">Louis <br className="md:hidden" /> JAGUENEAU</h1>
                        <h2 className="text-text dark:text-text-dark mt-[-20px]">Porfolio</h2>
                    </div>
                    {/* Paragraphe */}
                    <div className="mb-8 text-center lg:text-justify font-poppins text-text-muted dark:text-text-muted-dark text-[0.9rem] leading-6">
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et qui officiis ab incidunt alias, laudantium atque fuga, repellat corporis enim reprehenderit voluptatum minus amet dicta illum rem nihil est voluptates.</p>
                    </div>
                    {/* Button */}
                    <div className="flex justify-center">
                        <button className="bg-primary font-poppins text-white font-semibold rounded-sm py-2 px-4 flex items-center gap-2 text-[0.9rem] ">
                            Download CV <MdOutlineFileDownload className="text-xl" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-stretch justify-center  border-2 border-red-400">
                    {/* Bloc 1 */}
                    <div className="flex flex-row-reverse gap-3 mb-3 border-2">
                        {/* Navigation Box */}
                        <div className="bg-bg-light dark:bg-bg-light-dark inline-flex w-full md:w-[325px] flex-col rounded-md">
                            <NavigationCard Icon={GoLightBulb} title='My project' subtitle='Over +20 projects completed' />
                            <NavigationCard Icon={FaArrowRightLong} title='My Education' subtitle='5 years in computer science' />
                            <NavigationCard Icon={PiBagSimple} title='My Experience' subtitle='+4 jobs hold' />
                        </div>
                        {/* Media */}
                        <div className="bg-bg-light dark:bg-bg-light-dark rounded-md p-4 inline-flex flex-col justify-between">
                            <DisplayMedia Icon={FiGithub} />
                            <DisplayMedia Icon={MdMailOutline} />
                            <DisplayMedia Icon={FaFigma} />
                            <DisplayMedia Icon={FaLinkedinIn} />
                        </div>
                    </div>
                    {/* Quote */}
                    <div className="flex flex-col gap-4 p-4  bg-bg-light dark:bg-bg-dark border-2">
                        <div className="flex flex-row justify-between">
                            <span className="text-text dark:text-text-dark font-poppins font-semibold flex items-center gap-2"><span className="bg-primary h-1 w-2 flex rounded-full"></span> Cender Xenos</span>
                            <FaQuoteRight className="text-3xl text-[#3F3D56]" />
                        </div>
                        <p className="text-text-muted dark:text-text-muted-dark text-[0.85rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi tristique sem ultricies molestie. Fusce lacinia metus nec condimentum tincidunt. Nunc in molestie ligula.</p>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home