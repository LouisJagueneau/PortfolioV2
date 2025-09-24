//Library
import { delay, motion } from "motion/react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


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
import Footer from "../components/Footer";

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
import { RiArrowRightSLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";

//Images
import DataverseIcon from '../assets/Dataverse.webp'
import PowerFxIcon from '../assets/PowerFx.png'
import PowerAppsIcon from '../assets/PowerApps.png'
import PowerAutomateIcon from '../assets/PowerAutomate.png'
import PowerBiIcon from '../assets/PowerBI.webp'
import ProfilePictureV2 from "../assets/ProfilePictureV2.png"
import FortaProject from '../assets/FortaProject.png'
import BigBand64Project from '../assets/BigBand64Project.png'
import GrillProject from '../assets/GrillProject.png'


function Home() {
    const { i18n, t } = useTranslation();

    const cvFile = i18n.language === "fr" ? "../../public/CV-LJ-fr.pdf" : "../../public/CV-LJ-en.pdf"

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

    const FloatingParticles = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/20 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: 0
                    }}
                    animate={{
                        y: [null, -20, 20, -20],
                        x: [null, 10, -10, 10],
                        scale: [0, 1, 0.8, 1]
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }}
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`
                    }}
                />
            ))}
        </div>
    )


    return (
        <div className="bg-bg dark:bg-bg-secondary-dark min-h-screen">
            <FloatingParticles />
            <Header />
            <section className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] my-[65px]
                                flex flex-col items-stretch
                                lg:flex-row">
                <div className="flex justify-between mb-8 lg:mb-0 lg:flex-3 2xl:flex-4">
                    {/* Hero */}
                    <div className="flex flex-col
                                    lg:justify-between "
                    >
                        <div>
                            {/* Student in Engineering */}
                            <motion.div className="mb-6 flex justify-center lg:justify-start"
                                initial='hidden'
                                variants={titleAnimation}
                                custom={0}
                                animate="visible"
                                viewport={{ once: false }}
                            >
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                    <span className="relative uppercase bg-gradient-to-r from-[#0D99FF] via-[#1483D5] to-[#0D99FF] bg-clip-text text-transparent tracking-[0.2em] font-poppins text-[0.75rem] font-bold flex items-center gap-3 px-4 py-2 border border-primary/20 rounded-full backdrop-blur-sm">
                                        <span className="bg-primary h-[0.15rem] w-6 rounded-full hidden lg:flex"></span>
                                        {t("home.student_in_engineering")}
                                    </span>
                                </div>
                            </motion.div>
                            {/* Louis Jagueneau Portfolio */}
                            <motion.div className="mb-6 font-quattrocento font-bold text-[45px] sm:text-[68px] text-center
                                        lg:mb-8 lg:text-start
                                        xl:mb-4 xl:text-[80px] "
                                initial='hidden'
                                variants={titleAnimation}
                                custom={0.3}
                                animate="visible"
                                viewport={{ once: false }}
                            >
                                <h1 className="text-primary ">Louis <br className="md:hidden" /> JAGUENEAU</h1>
                                <h2 className="text-text dark:text-text-dark mt-[-20px]">{t("home.portfolio")}</h2>
                            </motion.div>
                            {/* Paragraphe */}
                            <motion.div className="mb-8 2xl:mb-6 text-center lg:text-justify font-poppins text-text-muted dark:text-text-muted-dark text-[0.9rem] leading-6 lg:leading-8 2xl:leading-6 2xl:w-158"
                                initial='hidden'
                                variants={titleAnimation}
                                custom={0.6}
                                animate="visible"
                                viewport={{ once: false }}
                            >
                                <p >{t("home.intro_paragraph")}</p>
                            </motion.div>
                        </div>
                        {/* Button */}
                        <motion.div className="flex justify-center lg:justify-start"
                            initial='hidden'
                            variants={titleAnimation}
                            custom={0.9}
                            animate="visible"
                            viewport={{ once: false }}>
                            <motion.a
                                href={cvFile}
                                download
                                className="relative group bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary transition-all duration-300 outline-none font-poppins cursor-pointer text-white font-bold rounded-xl py-3 px-4 flex items-center gap-3 text-[1rem] shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
                                whileTap={{ scale: 0.90 }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">{t("home.download_cv")}</span>
                                <MdOutlineFileDownload className="relative z-10 text-xl group-hover:rotate-12 transition-transform duration-300" />
                            </motion.a>
                        </motion.div>
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

            <section id="about" className="relative bg-gradient-to-br from-bg-secondary via-bg-secondary to-bg-light dark:from-bg-secondary-dark dark:via-bg-secondary-dark dark:to-bg-light-dark overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary/2 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-2xl"></div>

                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: Math.random() * 100 + '%',
                                scale: 0
                            }}
                            animate={{
                                y: [null, '-20px', '20px', '-20px'],
                                x: [null, '10px', '-10px', '10px'],
                                scale: [0, 1, 0.7, 1],
                                opacity: [0, 0.6, 0.3, 0.6]
                            }}
                            transition={{
                                duration: 6 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.8
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] relative z-10">
                    <div className="py-[80px]">
                        {/* Enhanced Title */}
                        <div className="text-center xl:text-start mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center justify-center xl:justify-start gap-4 ">
                                <span className="uppercase font-rem tracking-widest text-[0.95rem] bg-gradient-to-r from-primary via-primary to-primary-hover bg-clip-text text-transparent">
                                    {t("home.about_me")}
                                </span>
                            </motion.div>
                            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3, duration: 0.6 }}
                                className="font-rem font-bold text-[35px] bg-gradient-to-r from-text via-text to-text-muted dark:from-text-dark dark:via-text-dark dark:to-text-muted-dark bg-clip-text text-transparent leading-tight">
                                {t("home.my_profile")}
                            </motion.h2>
                        </div>

                        <div className="flex flex-col justify-between items-center xl:flex-row xl:items-stretch max-w-7xl mx-auto">
                            {/* Enhanced Profile Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative group perspective-1000 mb-10 lg-mb-0"
                            >
                                {/* Glowing background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-110"></div>

                                {/* Main image container */}
                                <div className="relative transform group-hover:scale-[1.02] transition-all duration-500 2xl:ml-[-20px]">
                                    {/* Border gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/10 rounded-3xl p-1">
                                        <div className="w-full h-full bg-gradient-to-br from-white/15 to-white/5 dark:from-white/10 dark:to-white/3 backdrop-blur-xl rounded-3xl"></div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative p-4 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-white/20 shadow-2xl">
                                        <img
                                            src={ProfilePictureV2}
                                            alt="Louis Jagueneau - Student in Engineering"
                                            className="rounded-2xl w-80 xl:w-96 object-cover transform group-hover:scale-[1.01] transition-transform duration-500 shadow-lg"
                                        />

                                        {/* Floating badge */}
                                        <motion.div
                                            className="absolute -bottom-3 -right-3 bg-gradient-to-br from-primary to-primary-hover text-white p-4 rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                                            animate={{
                                                y: [0, -5, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}>
                                            <RiGraduationCapFill className="text-2xl" />
                                        </motion.div>

                                        {/* Corner accents */}
                                        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/50 rounded-tl-lg"></div>
                                        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/50 rounded-tr-lg"></div>
                                        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary/50 rounded-bl-lg"></div>
                                        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary/50 rounded-br-lg"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enhanced Content */}
                            <div className="flex flex-col gap-12 items-center max-w-3xl lg:max-w-2xl xl:max-w-3xl">
                                {/* Header text with enhanced styling */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-center xl:text-start flex flex-col gap-6">

                                    <div className="relative">
                                        <h3 className="font-rem font-bold text-[28px] md:text-[32px] bg-gradient-to-r from-text to-text-muted dark:from-text-dark dark:to-text-muted-dark bg-clip-text text-transparent leading-tight">
                                            {t("home.student_in_cs")}
                                        </h3>
                                        <motion.div
                                            className="absolute -bottom-1 left-1/2 xl:left-0 transform -translate-x-1/2 xl:translate-x-0 w-20 h-0.5 bg-gradient-to-r from-primary to-primary-hover rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: 80 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: 0.8, duration: 0.6 }}
                                        ></motion.div>
                                    </div>

                                    <div className="relative group">
                                        {/* Subtle glow background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/2 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                                        <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/8 dark:to-white/3 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-md">
                                            {/* Decorative corner elements */}
                                            <div className="absolute top-0 left-0 w-8 h-8">
                                                <div className="absolute top-2 left-2 w-4 h-0.5 bg-primary rounded-full"></div>
                                                <div className="absolute top-2 left-2 w-0.5 h-4 bg-primary rounded-full"></div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-8 h-8">
                                                <div className="absolute top-2 right-2 w-4 h-0.5 bg-primary rounded-full"></div>
                                                <div className="absolute top-2 right-2 w-0.5 h-4 bg-primary rounded-full"></div>
                                            </div>

                                            <p className="font-poppins text-sm md:text-[1.0rem] text-text-muted dark:text-text-muted-dark leading-relaxed">
                                                {t("home.about_paragraph")}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Enhanced Cards Grid */}
                                <div className="grid grid-cols-1 gap-8 w-full sm:w-4/5 md:grid-cols-2 md:w-full 2xl:gap-10">
                                    {[
                                        {
                                            title: t("home.objectives_title"),
                                            description: t("home.objectives_desc"),
                                            delay: 0.1,
                                            direction: "left"
                                        },
                                        {
                                            title: t("home.philosophy_title"),
                                            description: t("home.philosophy_desc"),
                                            delay: 0.2,
                                            direction: "right"
                                        },
                                        {
                                            title: t("home.team_spirit_title"),
                                            description: t("home.team_spirit_desc"),
                                            delay: 0.3,
                                            direction: "left"
                                        },
                                        {
                                            title: t("home.hobbies_title"),
                                            description: t("home.hobbies_desc"),
                                            delay: 0.4,
                                            direction: "right"
                                        }
                                    ].map((card, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                x: card.direction === "left" ? -40 : 40,
                                                y: 20
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                                y: 0
                                            }}
                                            viewport={{ once: false }}
                                            transition={{
                                                delay: card.delay,
                                                duration: 0.6,
                                                ease: "easeOut"
                                            }}
                                            className="group"
                                        >
                                            <IntroductionCard
                                                title={card.title}
                                                description={card.description}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" className="bg-bg dark:bg-bg-secondary-dark container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] my-[65px]">
                <div>

                    {/* Title Div */}
                    <div className="text-center xl:text-start mb-10">
                        <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">{t("home.experiences")}</span>
                        <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">{t("home.professional_pathway")}</h2>
                    </div>

                    <motion.div
                        initial='hidden'
                        variants={SlowFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: false }}>
                        <CareerTimeLine />
                    </motion.div>
                </div>
            </section>

            <section id="education" className="bg-bg dark:bg-bg-secondary-dark container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] my-[65px]">
                {/* Title Div */}
                <div className="text-center xl:text-start mb-10">
                    <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">{t("home.education")}</span>
                    <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">{t("home.diploma_pathway")}</h2>
                </div>

                <div className="">
                    <motion.div
                        initial='hidden'
                        variants={MediumFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: false }}>
                        <EducationCard
                            title={t('education.engineering.title')}
                            fromDate={t('education.engineering.fromDate')}
                            toDate={t('education.engineering.toDate')}
                            school={t('education.engineering.school')}
                            tags={t('education.engineering.tags', { returnObjects: true })}
                            borderDown='false'
                            borderUp='true'
                            description={t('education.engineering.description')}
                        />
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        variants={MediumFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: false }}>
                        <EducationCard
                            title={t('education.preparatory.title')}
                            fromDate={t('education.preparatory.fromDate')}
                            toDate={t('education.preparatory.toDate')}
                            school={t('education.preparatory.school')}
                            tags={t('education.preparatory.tags', { returnObjects: true })}
                            borderDown='false'
                            borderUp='true'
                            description={t('education.preparatory.description')}
                        />
                    </motion.div>
                    <motion.div
                        initial='hidden'
                        variants={MediumFadeIn}
                        custom={0}
                        whileInView='visible'
                        viewport={{ once: false }}>
                        <EducationCard
                            title={t('education.highschool.title')}
                            fromDate={t('education.highschool.fromDate')}
                            toDate={t('education.highschool.toDate')}
                            school={t('education.highschool.school')}
                            tags={t('education.highschool.tags', { returnObjects: true })}
                            borderDown='true'
                            borderUp='true'
                            description={t('education.highschool.description')}
                        />
                    </motion.div>
                </div>
            </section>

            <section id="projects" className="bg-bg-secondary dark:bg-bg-secondary-dark">
                <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[65px]">
                    {/* Title Div */}
                    <div className="text-center mb-10">
                        <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">{t("home.projects")}</span>
                        <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">{t("home.my_work")}</h2>
                    </div>
                    <div className="gap-5 grid grid-cols-1 mb-8 xl:mb-12 2xl:mb-15
                                    md:grid-cols-2  md:gap-8 
                                    lg:grid-cols-3 lg:gap-5 ">
                        <motion.div
                            initial='hidden'
                            variants={FastFadeIn}
                            custom={0}
                            whileInView='visible'
                            viewport={{ once: false }}>
                            <WorkCard
                                tags={t("projects.bigband64.tags", { returnObjects: true })}
                                image={BigBand64Project}
                                title={t("projects.bigband64.title")}
                                websiteLink={t("projects.bigband64.websiteLink")}
                                description={t("projects.bigband64.description")}
                            />
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            variants={FastFadeIn}
                            custom={0.3}
                            whileInView='visible'
                            viewport={{ once: false }}>
                            <WorkCard
                                tags={t("projects.forta.tags", { returnObjects: true })}
                                image={FortaProject}
                                title={t("projects.forta.title")}
                                websiteLink={t("projects.forta.websiteLink")}
                                description={t("projects.forta.description")}
                            />
                        </motion.div>
                        <motion.div className="md:col-span-2 md:flex md:justify-center lg:flex-none lg:col-span-1"
                            initial='hidden'
                            variants={FastFadeIn}
                            custom={0.6}
                            whileInView='visible'
                            viewport={{ once: false }}>
                            <WorkCard
                                tags={t("projects.grill.tags", { returnObjects: true })}
                                image={GrillProject}
                                title={t("projects.grill.title")}
                                description={t("projects.grill.description")}
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/projects'}>
                            <motion.button className="font-poppins cursor-pointer text-white bg-primary px-4 py-2 rounded-md flex items-center font-medium gap-2 transition-colors outline-none duration-200 hover:bg-primary-hover"
                                whileTap={{ scale: 0.9 }}>

                                {t("home.more_projects")} <FaArrowRightLong />
                            </motion.button>
                        </Link>
                    </div>

                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                    >
                        <span className="uppercase font-medium text-blue-600 dark:text-blue-400 tracking-widest text-sm mb-2 block">
                            {t("home.technical_skills")}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            {t("home.my_competencies")}
                        </h2>
                    </motion.div>

                    {/* Skills Sections */}
                    <div className="space-y-20">

                        {/* Frontend & Design */}
                        <SkillSection
                            title={t("home.frontend_design")}
                            category="frontend"
                            skills={[
                                { Icon: IoLogoReact, title: "React", color: "text-white", keyWords: ["Components", "Hooks", "States"] },
                                { Icon: FaFigma, title: "Figma", color: "text-white", keyWords: ["UI Design", "Prototypes", "Wireframes"] },
                                { Icon: RiTailwindCssFill, title: "Tailwind", color: "text-white", keyWords: ["Responsive", "Custom Themes"] },
                                { Icon: IoLogoJavascript, title: "JavaScript", color: "text-white", keyWords: ["ES6+", "DOM", "APIs"] },
                                { Icon: FaHtml5, title: "HTML5", color: "text-white", keyWords: ["Semantic", "Forms", "SEO"] },
                                { Icon: FaCss3Alt, title: "CSS3", color: "text-white", keyWords: ["Flexbox", "Grid", "Animations"] },
                            ]}
                        />

                        {/* Backend & Databases */}
                        <SkillSection
                            title={t("home.backend_databases")}
                            category="backend"
                            skills={[
                                { Icon: SiExpress, title: "Express.js", color: "text-white", keyWords: ["APIs", "Middleware", "Routing"] },
                                { Icon: FaPhp, title: "PHP", color: "text-white", keyWords: ["OOP", "Laravel", "Symfony"] },
                                { Icon: FaLaravel, title: "Laravel", color: "text-white", keyWords: ["MVC", "Blade", "Eloquent"] },
                                { Icon: FaNodeJs, title: "Node.js", color: "text-white", keyWords: ["Backend", "REST", "Async"] },
                                { Icon: DiMsqlServer, title: "SQL Server", color: "text-white", keyWords: ["Stored Proc", "Queries", "Joins"] },
                                { Icon: GrMysql, title: "MySQL", color: "text-white", keyWords: ["CRUD", "Schemas", "Indexes"] },
                                { Icon: SiMongodb, title: "MongoDB", color: "text-white", keyWords: ["Documents", "NoSQL", "Atlas"] },
                            ]}
                        />

                        {/* No-Code & Low-Code */}
                        <SkillSection
                            title={t("home.nocode_lowcode")}
                            category="nocode"
                            skills={[
                                { Icon: DataverseIcon, title: "Dataverse", isImage: true, keyWords: ["Tables", "Relationships", "Security"] },
                                { Icon: PowerFxIcon, title: "Power Fx", isImage: true, keyWords: ["Formulas", "Logic", "Expressions"] },
                                { Icon: PowerAppsIcon, title: "Power Apps", isImage: true, keyWords: ["Canvas", "Components", "Connectors"] },
                                { Icon: PowerAutomateIcon, title: "Power Automate", isImage: true, keyWords: ["Flows", "Automation", "Triggers"] },
                                { Icon: PowerBiIcon, title: "Power BI", isImage: true, keyWords: ["Dashboards", "Reports", "Data Viz"] },
                            ]}
                        />
                    </div>
                </div>
            </section>

            <Footer />

        </div >
    )
}

export default Home