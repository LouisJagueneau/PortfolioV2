import { RiArrowRightSLine } from "react-icons/ri";

function IntroductionCard({title, description}) {
    return(
        <div className="flex flex-col p-4 gap-2 bg-bg dark:bg-bg-light-dark rounded-sm border-b-2 border-primary">
            <div className="flex items-center text-[1.0rem] 2xl:text-[1.15rem]">
                <RiArrowRightSLine className="text-primary text-2xl" />
                <h4 className="font-rem font-medium text-text dark:text-text-dark">{title}</h4>
            </div>
            <p className="flex pl-2 font-poppins text-[0.75rem] 2xl:text-[0.85rem] text-justify text-text-muted dark:text-text-muted-dark">
                {description} 
            </p>
            
        </div>
    )
}

export default IntroductionCard