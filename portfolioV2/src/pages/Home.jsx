import DarkModeToggle from "../components/DarkModeToggle"
import Header from "../components/Header"
import Nav from "../components/nav"
import DisplayMedia from "../components/DisplayMedia";
// Icons
import { MdOutlineFileDownload } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiBagSimple } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";


function Home() {
    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen">
            <Header />
            {/* Hero */}
            <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px] mt-[85px]">

                <div className="mb-8">
                    {/* Student in Engineering */}
                    <div className="mb-6 flex justify-center lg:justify-start">
                        <span className=" uppercase bg-gradient-to-l from-[#0D99FF] to-[#1483D5] bg-clip-text text-transparent tracking-widest font-poppins text-[0.8rem] font-semibold flex items-center gap-2">
                            <span className="bg-primary h-[0.2rem] w-12 rounded-full hidden lg:flex"></span>student in engineering
                        </span>
                    </div>
                    {/* Louis Jagueneau Portfolio */}
                    <div className="mb-6 font-quattrocento font-bold text-[68px] text-center lg:text-start">
                        <h1 className="text-primary ">Louis JAGUENEAU</h1>
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

                <div className="flex flex-row-reverse gap-3 justify-center">
                    {/* Navigation Box */}
                    <div className="bg-bg-light dark:bg-bg-light-dark inline-flex w-[325px] flex-col rounded-md">
                        {/* 1 My Project */}
                        <div className="flex items-center justify-between hover:bg-hover-bg-light hover:dark:bg-hover-bg-light-dark rounded-md p-4 cursor-pointer">
                            <div className="flex items-center gap-5">
                                <div className="border-1 border-black/10 rounded-md p-2 text-xl ">
                                    <GoLightBulb />
                                </div>
                                <div className=" flex flex-col gap-1">
                                    <span className="text-text dark:text-text-dark font-poppins font-medium text-[0.9rem]">My project</span>
                                    <p className="text-text-muted dark:text-text-muted-dark text-[0.7rem] font-poppins font-light">Over +20 projects completed</p>
                                </div>
                            </div>
                            <div>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        {/* 2 My Education */}
                        <div className="flex items-center justify-between hover:bg-hover-bg-light hover:dark:bg-hover-bg-light-dark rounded-md p-4 cursor-pointer">
                            <div className="flex items-center gap-5">
                                <div className="border-1 border-black/10 rounded-md p-2 text-xl">
                                    <IoSchoolOutline />
                                </div>
                                <div className=" flex flex-col gap-1">
                                    <span className="text-text dark:text-text-dark font-poppins font-medium text-[0.9rem]">My Education</span>
                                    <p className="text-text-muted dark:text-text-muted-dark text-[0.7rem] font-poppins font-light">5 years in computer science</p>
                                </div>
                            </div>
                            <div>
                                <FaArrowRightLong />
                            </div>
                        </div>
                        {/* 3 My Expeprience */}
                        <div className="flex items-center justify-between hover:bg-hover-bg-light hover:dark:bg-hover-bg-light-dark rounded-md p-4 cursor-pointer">
                            <div className="flex items-center gap-5">
                                <div className="border-1 border-black/10 rounded-md p-2 text-xl">
                                    <PiBagSimple />
                                </div>
                                <div className=" flex flex-col gap-1">
                                    <span className="text-text dark:text-text-dark font-poppins font-medium text-[0.9rem]">My Experiences</span>
                                    <p className="text-text-muted dark:text-text-muted-dark text-[0.7rem] font-poppins font-light">Something to write</p>
                                </div>
                            </div>
                            <div>
                                <FaArrowRightLong />
                            </div>

                        </div>
                    </div>

                    {/* Media */}
                    <div className="bg-bg-light dark:bg-bg-light-dark rounded-md p-4 inline-flex flex-col gap-2">
                        <DisplayMedia icon='FiGithub'/>
                        <DisplayMedia icon='MdMailOutline'/>
                        <DisplayMedia icon='FaFigma'/>

                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home