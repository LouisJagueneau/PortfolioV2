//Library
import { delay, motion } from "motion/react"


//Components
import Header from "../components/Header"
import SidePanelMobile from "../components/SidePanelMobile";
import SidePanelPC from "../components/SidePanelPC";
import IntroductionCard from "../components/IntroductionCard";
import CareerTimeLine from "../components/CareerTimeLine";
import EducationCard from "../components/EducationCard";
import WorkCard from "../components/WorkCard";
import SkillBox from "../components/SkillBox";
import SkillSection from "../components/SkillSection";

// Icons
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

//Images
import DataverseIcon from '../assets/Dataverse.webp'
import PowerFxIcon from '../assets/PowerFx.png'
import PowerAppsIcon from '../assets/PowerApps.png'
import PowerAutomateIcon from '../assets/PowerAutomate.png'
import PowerBiIcon from '../assets/PowerBI.webp'
import ProfilePictureV2 from "../assets/ProfilePictureV2.png"

const educations = [
    {
        id: 1,
        title: 'Work-study Engineering Programme',
        fromDate: '2021',
        toDate: '2025',
        school: 'CESI',
        tags: ["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"],
        borderUp: 'true',
        borderDown: 'false',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. ...'
    },
    {
        id: 2,
        title: 'Integrated Preparatory Class',
        fromDate: '2019',
        toDate: '2021',
        school: 'CESI',
        tags: ["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"],
        borderUp: 'true',
        borderDown: 'false',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. ...'
    },
    {
        id: 3,
        title: 'General Baccalaureate (HighSchool Diploma)',
        fromDate: '2016',
        toDate: '2019',
        school: 'CESI',
        tags: ["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"],
        borderUp: 'true',
        borderDown: 'true',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. ...'
    }
];


function Home() {


    const titleAnimation = {
        hidden: { opacity: 0, x: -20 },
        visible: (custom) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: custom } })
    }

    const SlowFadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (custom) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, delay: custom } })
    }
    const MediumFadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (custom) => ({ opacity: 1, scale: 1, transition: { duration: 0.4, delay: custom } })
    }
    const FastFadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (custom) => ({ opacity: 1, scale: 1, transition: { duration: 0.3, delay: custom } })
    }



    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen">
            <Header />
            <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] mt-[65px]
                                flex flex-col items-stretch
                                lg:flex-row">
                {/* Hero */}
                <div className="mb-8 flex flex-col
                                lg:mb-0 lg:flex-3 lg:justify-between
                                2xl:flex-4"
                >
                    <div>
                        {/* Student in Engineering */}
                        <motion.div className="mb-6 flex justify-center lg:justify-start"
                            initial='hidden'
                            variants={titleAnimation}
                            custom={0}
                            whileInView='visible'
                            viewport={{ once: true }}
                        >
                            <span className=" uppercase bg-gradient-to-l from-[#0D99FF] to-[#1483D5] bg-clip-text text-transparent tracking-widest font-poppins text-[0.8rem] font-semibold flex items-center gap-2">
                                <span className="bg-primary h-[0.2rem] w-8 rounded-full hidden lg:flex"></span>student in engineering
                            </span>
                        </motion.div>
                        {/* Louis Jagueneau Portfolio */}
                        <motion.div className="mb-6 font-quattrocento font-bold text-[68px] text-center
                                        lg:mb-8 lg:text-start
                                        xl:mb-4 xl:text-[80px] "
                            initial='hidden'
                            variants={titleAnimation}
                            custom={0.3}
                            whileInView='visible'
                            viewport={{ once: true }}
                        >
                            <h1 className="text-primary ">Louis <br className="md:hidden" /> JAGUENEAU</h1>
                            <h2 className="text-text dark:text-text-dark mt-[-20px]">Porfolio</h2>
                        </motion.div>
                        {/* Paragraphe */}
                        <motion.div className="mb-8 2xl:mb-6 text-center lg:text-justify font-poppins text-text-muted dark:text-text-muted-dark text-[0.9rem] leading-6 lg:leading-8 2xl:leading-6 2xl:w-158"
                            initial='hidden'
                            variants={titleAnimation}
                            custom={0.6}
                            whileInView='visible'
                            viewport={{ once: true }}
                        >
                            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et qui officiis ab incidunt alias, laudantium atque fuga, repellat corporis enim reprehenderit voluptatum minus amet dicta illum rem nihil est voluptates.</p>
                        </motion.div>
                    </div>
                    {/* Button */}
                    <motion.div className="flex justify-center lg:justify-start"
                        initial='hidden'
                        variants={titleAnimation}
                        custom={0.9}
                        whileInView='visible'
                        viewport={{ once: true }}>
                        <motion.button
                            className="bg-primary hover:bg-primary-hover transition-colors outline-none duration-200 font-poppins cursor-pointer text-white font-semibold rounded-sm py-2 px-4 flex items-center gap-2 text-[0.9rem] "
                            whileTap={{ scale: 0.9 }}>
                            Download CV <MdOutlineFileDownload className="text-xl" />
                        </motion.button>
                    </motion.div>
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

                            <motion.img src={ProfilePictureV2}
                                initial='hidden'
                                variants={SlowFadeIn}
                                custom={0}
                                whileInView='visible'
                                viewport={{ once: true }}
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

                    <motion.div
                        initial='hidden'
                        variants={SlowFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: true }}>
                        <CareerTimeLine />
                    </motion.div>
                </div>
            </section>

            <section className="bg-bg dark:bg-bg-dark container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] my-[65px]">
                {/* Title Div */}
                <div className="text-center xl:text-start mb-10">
                    <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">Education</span>
                    <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">Diploma Pathway</h2>
                </div>

                <div className="">
                    <motion.div
                        initial='hidden'
                        variants={MediumFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: true }}>
                        <EducationCard title='Work-study Engineering Programme' fromDate='2021' toDate='2025' school='CESI' tags={["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"]} borderDown='false' borderUp='true' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus' />

                    </motion.div>
                    <motion.div
                        initial='hidden'
                        variants={MediumFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: true }}>
                        <EducationCard title='Integrated Preparatory Class' fromDate='2019' toDate='2021' school='CESI' tags={["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"]} borderDown='false' borderUp='true' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus' />

                    </motion.div>
                    <motion.div
                        initial='hidden'
                        variants={MediumFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: true }}>
                        <EducationCard title='General Baccalaureate (HighSchool Diploma)' fromDate='2016' toDate='2019' school='CESI' tags={["Web Developement", "Software Development", "Big Data", "Network", "Operational Research", "Industrial Optimisation"]} borderDown='true' borderUp='true' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus' />

                    </motion.div>
                </div>
            </section>

            <section className="bg-bg-secondary dark:bg-bg-secondary-dark">
                <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[65px]">
                    {/* Title Div */}
                    <div className="text-center mb-10">
                        <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">Projects</span>
                        <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">My Work</h2>
                    </div>
                    <div className="gap-5 grid grid-cols-1 mb-8 xl:mb-12 2xl:mb-15
                                    md:grid-cols-2  md:gap-8 
                                    lg:grid-cols-3 lg:gap-5 ">
                        <motion.div
                            initial='hidden'
                            variants={FastFadeIn}
                            custom={0}
                            whileInView='visible'
                            viewport={{ once: true }}>
                            < WorkCard tags={['React', 'TailwindCSS', 'Php']} title='Forta Website' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate nisl et viverra volutpat. Morbi ut leo nunc. Suspendisse finibus.' />
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            variants={FastFadeIn}
                            custom={0.3}
                            whileInView='visible'
                            viewport={{ once: true }}>
                            < WorkCard tags={['React', 'TailwindCSS', 'Php']} title='Forta Website' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate nisl et viverra volutpat. Morbi ut leo nunc. Suspendisse finibus.' />
                        </motion.div>
                        <motion.div className="md:col-span-2 md:flex md:justify-center lg:flex-none lg:col-span-1"
                            initial='hidden'
                            variants={FastFadeIn}
                            custom={0.6}
                            whileInView='visible'
                            viewport={{ once: true }}>
                            < WorkCard tags={['React', 'TailwindCSS', 'Php']} title='Forta Website' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate nisl et viverra volutpat. Morbi ut leo nunc. Suspendisse finibus.' />
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <motion.button className="font-poppins cursor-pointer text-white bg-primary px-4 py-2 rounded-md flex items-center font-medium gap-2 transition-colors outline-none duration-200 hover:bg-primary-hover"
                            whileTap={{ scale: 0.9 }}>
                            More Projects <FaArrowRightLong />
                        </motion.button>
                    </div>

                </div>
            </section>
            <section className="bg-bg dark:bg-bg-dark container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[65px]">

                {/* Title */}
                <div className="text-center mb-10 xl:mb-15 2xl:mb-20">
                    <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem]">Skills</span>
                    <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">My Competencies</h2>
                </div>

                {/* Frontend & Design */}
                <SkillSection title="Front-End & Design" skills={[
                    { Icon: IoLogoReact, title: "React", color: "text-primary", keyWords: ["Components", "Hooks", "States"] },
                    { Icon: FaFigma, title: "Figma", color: "text-[#f24e1f]", keyWords: ["UI Design", "Prototypes", "Wireframes"] },
                    { Icon: RiTailwindCssFill, title: "Tailwind", color: "text-[#3bb1af]", keyWords: ["Utility CSS", "Responsive", "Custom Themes"] },
                    { Icon: IoLogoJavascript, title: "JavaScript", color: "text-[#efd81d]", keyWords: ["ES6+", "DOM", "APIs"] },
                    { Icon: FaHtml5, title: "HTML5", color: "text-[#dd4b25]", keyWords: ["Semantic", "Forms", "SEO"] },
                    { Icon: FaCss3Alt, title: "CSS3", color: "text-[#254bdd]", keyWords: ["Flexbox", "Grid", "Animations"] },
                ]} />

                {/* Backend & Databases */}
                <SkillSection title="Back-end & Databases" skills={[
                    { Icon: SiExpress, title: "Express.js", color: "text-black", keyWords: ["APIs", "Middleware", "Routing"] },
                    { Icon: FaPhp, title: "PHP", color: "text-[#294555]", keyWords: ["OOP", "Laravel", "Symfony"] },
                    { Icon: FaLaravel, title: "Laravel", color: "text-[#f72211]", keyWords: ["MVC", "Blade", "Eloquent"] },
                    { Icon: FaNodeJs, title: "Node.js", color: "text-[#7ec727]", keyWords: ["Backend", "REST", "Async"] },
                    { Icon: DiMsqlServer, title: "SQL Server", color: "text-[#e62b3a]", keyWords: ["Stored Proc", "Queries", "Joins"] },
                    { Icon: GrMysql, title: "MySQL", color: "text-[#255278]", keyWords: ["CRUD", "Schemas", "Indexes"] },
                    { Icon: SiMongodb, title: "MongoDB", color: "text-[#3f9937]", keyWords: ["Documents", "NoSQL", "Atlas"] },
                ]} />

                {/* No-Code & Low-Code */}
                <SkillSection title="No-Code & Low-Code" skills={[
                    { Icon: DataverseIcon, title: "Dataverse", isImage: true, keyWords: ["Tables", "Relationships", "Security"] },
                    { Icon: PowerFxIcon, title: "Power Fx", isImage: true, keyWords: ["Formulas", "Logic", "Expressions"] },
                    { Icon: PowerAppsIcon, title: "Power Apps", isImage: true, keyWords: ["Canvas", "Components", "Connectors"] },
                    { Icon: PowerAutomateIcon, title: "Power Automate", isImage: true, keyWords: ["Flows", "Automation", "Triggers"] },
                    { Icon: PowerBiIcon, title: "Power BI", isImage: true, keyWords: ["Dashboards", "Reports", "Data Viz"] },
                ]} />

            </section>


        </div >
    )
}

export default Home