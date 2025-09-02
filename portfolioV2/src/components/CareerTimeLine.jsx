import { useState } from "react"
import { RiArrowRightSLine } from "react-icons/ri";

const experiences = [
    {
        id: 1,
        company: "TotalEnergies",
        date: "2021-2025",
        role: "Power Platform Developer",
        responsabilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus.",
    },
    {
        id: 2,
        company: "Pula University",
        date: "2025-2025",
        role: "Full Stack Developer",
        responsabilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus.",


    },
    {
        id: 3,
        company: "Safran HE",
        date: "2021",
        role: "Power Platform Developer",
        responsabilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus.",

    },
    {
        id: 4,
        company: "Summer Job",
        date: "2021",
        role: "Fisherman",
        responsabilities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus. Praesent consequat, tellus ornare rhoncus pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc tellus.",

    }
]

function CareerTimeLine() {

    const [isSelected, setIsSelected] = useState(experiences[0])

    return (
        <div className="flex flex-col xl:flex-row">
            <div className="flex justify-center xl:w-1/2 2xl:w-1/3">
                <div className="grid grid-cols-2 grid-rows-2 w-full rounded-md 
                            sm:flex sm:flex-row sm:items-center sm:justify-around
                            xl:flex-col xl:items-start">
                    {experiences.map((exp, index) => {
                        return (
                            <div className={`xl:border-l-5 ${isSelected.id === exp.id ? "border-l-primary" : "border-l-text-muted dark:border-text-muted-dark"}`} >
                                <button className={`flex flex-col xl:items-start font-rem font-medium text-[1.15rem] p-3 xl:p-5 w-full bg-bg-light dark:bg-bg-light-dark hover:bg-hover-bg-light hover:dark:bg-hover-bg-light-dark xl:bg-bg xl:dark:bg-bg-dark xl:hover:bg-bg xl:dark:hover:bg-bg-dark cursor-pointer
                                                    ${isSelected.id === exp.id ? 'text-white bg-primary hover:bg-primary xl:bg-bg dark:xl:bg-bg-dark xl:text-primary xl:hover:bg-bg xl:dark:hover:bg-bg-dark ' : 'text-text dark:text-text-dark xl:text-text-muted xl:dark:text-text-muted-dark'}`}
                                    onClick={() => setIsSelected(experiences[index])}
                                >
                                    {exp.company}
                                    <span className="font-light text-[0.8rem] xl:text-text xl:dark:text-text-dark">{exp.date}</span>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-10 xl:mt-0 bg-bg dark:bg-bg-dark">
                <div className="text-center mb-6 xl:text-start">
                    <h3 className="font-rem font-semibold text-[25px] text-text dark:text-text-dark">{isSelected.role}</h3>
                    <div className="flex gap-2 justify-center xl:justify-start font-poppins">
                        <span className="text-primary">@{isSelected.company}</span>
                        <span className="text-text-muted dark:text-text-muted-dark">{isSelected.date}</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-12 xl:gap-20">
                    <div className="border-1 rounded-md border-black/20 px-5 py-4 bg-bg dark:bg-bg-dark dark:border-white/20
                                    md:flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-1">
                                <RiArrowRightSLine className="text-primary text-[23px] xl:text-[27px]" />
                                <h4 className="font-rem text-[20px] text-text dark:text-text-dark">Responsabilities</h4>
                            </div>
                            <p className="text-text-muted dark:text-text-muted-dark text-justify px-2 whitespace-pre-line text-[0.85rem]
                                         2xl:text-[0.95rem]">
                                {isSelected.responsabilities}
                            </p>
                        </div>
                    </div>
                    <div className="border-1 rounded-md border-black/20 px-5 py-4 bg-bg dark:bg-bg-dark dark:border-white/20
                                    md:flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-1">
                                <RiArrowRightSLine className="text-primary text-[23px] xl:text-[27px]" />
                                <h4 className="font-rem text-[20px] text-text dark:text-text-dark">Tools</h4>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerTimeLine