//Components
import Header from "../components/Header"
import SidePanelMobile from "../components/SidePanelMobile";


// Icons
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";


function Home() {
    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen">
            <Header />
            <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] mt-[65px]
                                flex flex-col items-stretch
                                lg:flex-row">
                {/* Hero */}
                <div className="mb-8 flex flex-col border-2
                                lg:mb-0 lg:flex-3">
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


                <div className="border-1 flex flex-2">
                    {/* width < lg */}
                    <div className="w-full">
                        <SidePanelMobile/>
                    </div>
                    {/* width > lg */}
                    <div>
                        
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Home