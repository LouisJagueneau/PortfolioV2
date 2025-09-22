import { useState } from "react"
import { RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        id: 1,
        company: "TotalEnergies",
        date: "2021-Today",
        role: "Power Platform Developer",
        responsabilities: "As a Power Platform Developer, I am responsible for designing, developing, and maintaining multiple business applications that are actively used on site. My role includes drafting detailed technical documentation and writing clear specifications to ensure alignment with business needs. \n\nI also deliver training sessions for employees to help them adopt and use new tools.",
        tools: ["Power Platform", "Power Apps", "Power Automate", "SharePoint", "SQL", "JavaScript", "Microsoft 365"]
    },
    {
        id: 2,
        company: "Pula University",
        date: "04/2023-07/2023",
        role: "SharePoint Developer",
        responsabilities: "As a Full Stack Developer, I was responsible for creating the official website of the company forta.hr, using React, Tailwind CSS, and PHP. During this project, I worked on both the front-end and back-end, ensuring a responsive design and a contact form for client communication. \n\n This abroad internship (Cortia) lasted five months and was part of my academic curriculum., providing valuable practical experience.",
        tools: ["React", "Tailwind CSS", "PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "Git", "Github"]
    },
    {
        id: 3,
        company: "Safran HE",
        date: "2021",
        role: "Power Platform Developer",
        responsabilities: "As a SharePoint Developer, my main objective was to design and implement a departmental portal in SharePoint. The project involved structuring a workspace where all files of the department could be stored, organized, and accessed efficiently.\n\n This internship was part of my academic curriculum, allowing me to strengthen both my technical skills in SharePoint and my ability to understand organizational needs.",
        tools: ["SharePoint", "Microsoft 365", "Power Platform", "JavaScript", "CSS", "HTML"]
    },
    {
        id: 4,
        company: "Summer Job",
        date: "07/2021-09/2021",
        role: "Fishmonger",
        responsabilities: "During this summer job in a fish shop, I was involved in both customer service and product preparation, including tasks such as filleting fish. This role required strong attention to detail, speed, and respect for hygiene standards.\n\n It was my first professional experience, where I gained valuable social skills through daily interactions with customers and teamwork with colleagues.",
        tools: ["Customer Service", "Food Safety", "Time Management", "Team Work", "Communication", "Problem Solving"]
    }
]

function CareerTimeLine() {
    const [isSelected, setIsSelected] = useState(experiences[0])

    return (
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
            {/* Timeline Navigation */}
            <div className="xl:w-1/3">
                <div className="flex flex-col space-y-2">
                    {experiences.map((exp, index) => {
                        const isActive = isSelected.id === exp.id;
                        return (
                            <motion.div 
                                key={exp.id}
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Timeline line */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${
                                    isActive ? 'bg-blue-500' : 'bg-gray-200'
                                }`} />
                                
                                <button 
                                    className={`w-full text-left p-4 pl-6 rounded-r-lg transition-all duration-300 border-l-4 ${
                                        isActive 
                                            ? 'bg-blue-50 border-l-blue-500 shadow-md' 
                                            : 'bg-white border-l-gray-200 hover:bg-gray-50 hover:border-l-gray-300'
                                    }`}
                                    onClick={() => setIsSelected(experiences[index])}
                                >
                                    <div className="flex flex-col">
                                        <span className={`font-semibold text-lg transition-colors duration-300 ${
                                            isActive ? 'text-blue-600' : 'text-gray-800'
                                        }`}>
                                            {exp.company}
                                        </span>
                                        <span className={`text-sm transition-colors duration-300 ${
                                            isActive ? 'text-blue-500' : 'text-gray-500'
                                        }`}>
                                            {exp.date}
                                        </span>
                                        <span className={`text-xs mt-1 transition-colors duration-300 ${
                                            isActive ? 'text-gray-700' : 'text-gray-400'
                                        }`}>
                                            {exp.role}
                                        </span>
                                    </div>
                                </button>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Content Area */}
            <div className="xl:w-2/3">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isSelected.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{isSelected.role}</h3>
                            <div className="flex items-center gap-2 text-blue-100">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                    @{isSelected.company}
                                </span>
                                <span className="text-sm opacity-90">{isSelected.date}</span>
                            </div>
                        </div>

                        {/* Content Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Responsibilities Card */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full py-4 px-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 text-text dark:text-text">
                                        <RiArrowRightSLine className="text-2xl text-primary" />
                                        <h4 className="text-xl font-semibold">Responsibilities</h4>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <p className="text-gray-700 text-sm text-justify leading-relaxed whitespace-pre-line">
                                        {isSelected.responsabilities}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Tools & Skills Card */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full py-4 px-6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 text-text dark:text-text-dark">
                                        <RiArrowRightSLine className="text-2xl text-primary" />
                                        <h4 className="text-lg font-semibold">Tools & Skills</h4>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="flex flex-wrap gap-2">
                                        {isSelected.tools && isSelected.tools.map((tool, index) => (
                                            <motion.span
                                                key={tool}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium border border-blue-300 hover:shadow-md transition-shadow duration-200"
                                            >
                                                {tool}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CareerTimeLine