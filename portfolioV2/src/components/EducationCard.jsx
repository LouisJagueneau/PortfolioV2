
function EducationCard({ tags = [], fromDate, toDate, school, description, title, borderUp, borderDown }) {
    
    
    return (
        <div>
            <div>
                <span className={`bg-[#D9D9D9] dark:bg-[#D9D9D9] w-full h-[0.5px] rounded-full mb-2 ${borderUp === 'true' ? 'flex' : 'hidden'}`}></span>
                <span className="text-text-muted dark:text-text-dark font-rem font-light">{school}</span>
            </div>
            <div className="flex flex-col gap-8 mt-3 mb-8
                            md:flex-row md:gap-12">
                <div className="flex flex-col items-center text-center
                                md:w-1/2 md:text-start md:items-start 
                                xl:flex-row xl:gap-20 xl:w-2/3">
                    <div className="font-rem font-light text-primary text-[27px] xl:text-[30px]">
                        <time datetime={fromDate}>{fromDate}</time>-<time datetime={toDate}>{toDate}</time>
                    </div>
                    <h3 className="font-rem font-medium text-text dark:text-text-dark text-[27px] xl:text-[30px]">{title}</h3>
                </div>
                <div className="flex flex-col gap-5
                                md:w-1/2">
                    <p className="font-poppins text-[0.85rem] text-justify text-text-muted dark:text-text-muted-dark leading-6">{description}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-6 w-full">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 font-light rounded-md font-poppins text-[0.85rem] bg-bg-light dark:bg-bg-light-dark text-text-muted dark:text-text-muted-dark"
                            >
                                {tag}
                            </span>
                        ))}
                        <span className="flex-1"></span>
                    </div>
                </div>
            </div>
            <div>
                <span className={`bg-[#D9D9D9] dark:bg-[#D9D9D9] w-full h-[0.5px] flex rounded-full mb-2 ${borderDown === 'true' ? 'flex' : 'hidden'}`}></span>
            </div>
        </div>
    )
}

export default EducationCard