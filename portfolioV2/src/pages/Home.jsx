//Components
import Header from "../components/Header"
import SidePanelMobile from "../components/SidePanelMobile";
import SidePanelPC from "../components/SidePanelPC";

// Icons
import { MdOutlineFileDownload } from "react-icons/md";


function Home() {
    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen">
            <Header />
            <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] mt-[65px]
                                flex flex-col items-stretch
                                lg:flex-row">
                {/* Hero */}
                <div className="mb-8 flex flex-col
                                lg:mb-0 lg:flex-3 lg:justify-between
                                2xl:flex-4">
                    <div>
                        {/* Student in Engineering */}
                        <div className="mb-6 flex justify-center lg:justify-start">
                            <span className=" uppercase bg-gradient-to-l from-[#0D99FF] to-[#1483D5] bg-clip-text text-transparent tracking-widest font-poppins text-[0.8rem] font-semibold flex items-center gap-2">
                                <span className="bg-primary h-[0.2rem] w-8 rounded-full hidden lg:flex"></span>student in engineering
                            </span>
                        </div>
                        {/* Louis Jagueneau Portfolio */}
                        <div className="mb-6 font-quattrocento font-bold text-[68px] text-center
                                        lg:mb-8 lg:text-start
                                        xl:mb-4 xl:text-[80px] ">
                            <h1 className="text-primary ">Louis <br className="md:hidden" /> JAGUENEAU</h1>
                            <h2 className="text-text dark:text-text-dark mt-[-20px]">Porfolio</h2>
                        </div>
                        {/* Paragraphe */}
                        <div className="mb-8 2xl:mb-6 text-center lg:text-justify font-poppins text-text-muted dark:text-text-muted-dark text-[0.9rem] leading-6 lg:leading-8 2xl:leading-6 2xl:w-158">
                            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et qui officiis ab incidunt alias, laudantium atque fuga, repellat corporis enim reprehenderit voluptatum minus amet dicta illum rem nihil est voluptates.</p>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-primary font-poppins text-white font-semibold rounded-sm py-2 px-4 flex items-center gap-2 text-[0.9rem] ">
                            Download CV <MdOutlineFileDownload className="text-xl" />
                        </button>
                    </div>
                </div>


                <div className="flex lg:flex-2 2xl:flex-3">
                    {/* width < lg */}
                    <div className="w-full lg:hidden">
                        <SidePanelMobile />
                    </div>
                    {/* width > lg */}
                    <div className="hidden lg:flex lg:ml-18 2xl:ml-0">
                        <SidePanelPC />
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Home