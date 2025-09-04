//Components
import Header from "../components/Header"
import SidePanelMobile from "../components/SidePanelMobile";
import SidePanelPC from "../components/SidePanelPC";
import IntroductionCard from "../components/IntroductionCard";
import CareerTimeLine from "../components/CareerTimeLine";
import EducationCard from "../components/EducationCard";
import WorkCard from "../components/WorkCard";


// Icons
import { MdOutlineFileDownload } from "react-icons/md";

import ProfilePictureV2 from "../assets/ProfilePictureV2.png"


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
                    <div className="w-full lg:hidden">
                        <SidePanelMobile />
                    </div>
                    <div className="hidden lg:flex lg:ml-18 2xl:ml-0">
                        <SidePanelPC />
                    </div>
                </div>

            </section >

            {/* About me Section */}
            <section className="bg-bg-secondary dark:bg-bg-dark">
                <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] mt-[65px]">


                    <div className="py-[50px]">

                        {/* Title Div */}
                        <div className="text-center xl:text-start mb-10">
                            <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">About me</span>
                            <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">My profile</h2>
                        </div>


                        <div className="flex flex-col justify-center items-center gap-12
                                        lg:flex-row xl:items-stretch">

                            <img src={ProfilePictureV2}
                                alt="ProfilePictureV2"
                                className="p-2 rounded-md w-80 xl:w-auto 2xl:w-3/4 bg-bg-light-secondary dark:bg-bg-ultralight-dark"
                            />

                            <div className="flex flex-col gap-8 items-center">

                                <div className="text-center lg:text-start flex flex-col gap-3">
                                    <h3 className="font-rem font-semibold text-[22px] 2xl:text-[28px] text-text dark:text-text-dark">Student in computer science</h3>
                                    <p className="font-poppins text-[0.75rem] 2xl:text-[0.90rem] text-text-muted dark:text-text-muted-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vehicula odio. Etiam laoreet nulla eu feugiat elementum. Ut ut pretium elit, eget finibus urna. Mauris a ante ut eros porttitor ullamcorper non eu ex. </p>
                                </div>

                                <div className="grid grid-cols-1 gap-y-3 
                                                sm:w-4/5 
                                                md:grid-cols-2 md:w-full md:gap-x-5 md:gap-y-5
                                                2xl:gap-x-9 2xl:gap-y-9">

                                    <IntroductionCard
                                        title="Objectives"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vehicula odio. Etiam laoreet nulla eu feugiat elementum"
                                    />
                                    <IntroductionCard
                                        title="Philosophy"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vehicula odio. Etiam laoreet nulla eu feugiat elementum"
                                    />
                                    <IntroductionCard
                                        title="Team Spirit"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vehicula odio. Etiam laoreet nulla eu feugiat elementum"
                                    />
                                    <IntroductionCard
                                        title="Hobbies"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae vehicula odio. Etiam laoreet nulla eu feugiat elementum"
                                    />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section >

            <section className="bg-bg dark:bg-bg-dark container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] my-[65px]">
                <div>

                    {/* Title Div */}
                    <div className="text-center xl:text-start mb-10">
                        <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">Experiences</span>
                        <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">Professional Pathway</h2>
                    </div>

                    <div>
                        <CareerTimeLine />
                    </div>
                </div>
            </section>

            <section className="bg-bg dark:bg-bg-dark container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] my-[65px]">
                {/* Title Div */}
                <div className="text-center xl:text-start mb-10">
                    <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">Education</span>
                    <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">Diploma Pathway</h2>
                </div>

                <div className="">
                    <EducationCard title='Work-study Engineering Programme' fromDate='2021' toDate='2025' school='CESI' tags={["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"]} borderDown='false' borderUp='true' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus' />
                    <EducationCard title='Integrated Preparatory Class' fromDate='2019' toDate='2021' school='CESI' tags={["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"]} borderDown='false' borderUp='true' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus' />
                    <EducationCard title='General Baccalaureate (HighSchool Diploma)' fromDate='2016' toDate='2019' school='CESI' tags={["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"]} borderDown='true' borderUp='true' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus' />
                </div>
            </section>

            <section className="bg-bg-secondary dark:bg-bg-secondary-dark">
                <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[65px]">
                    {/* Title Div */}
                    <div className="text-center mb-10">
                        <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">Projects</span>
                        <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">My Work</h2>
                    </div>
                    <div>
                        <WorkCard />
                    </div>

                </div>
            </section>

        </div >
    )
}

export default Home