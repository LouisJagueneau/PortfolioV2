import tempImage from '../assets/tempImage.png'
import { RiArrowRightSLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

function WorkCard({ tags = [], githubLink, websiteLink, description, title }) {
    return (

        <div className='max-w-[350px] mx-auto bg-bg dark:bg-bg-dark p-4 shadow-md rounded-md'>

            <div className='w-full mb-5'>
                <img className='rounded-md w-full h-35 xl:h-40' src={tempImage} alt="tempImage" />

            </div>
            <div className=''>
                <div className='flex items-center mb-3'>
                    <RiArrowRightSLine className="text-primary text-[23px] xl:text-[22px]" />
                    <h4 className="font-rem text-[18px] text-text dark:text-text-dark">{title}</h4>
                </div>
                <div className='flex flex-wrap gap-3 mb-6'>
                    {tags.map((tag, index) => {
                        return (
                            <span key={index} className='font-poppins text-[0.80rem] text-primary px-2 py-[1px] border-1 border-primary rounded-md '>{tag}</span>
                        )
                    })}

                </div>
                <p className=' mb-8 text-text-muted dark:text-text-muted-dark text-justify text-[0.80rem] font-poppins leading-6'>{description}</p>
                <div className='flex gap-3'>
                    <a href={githubLink} target='_blank' rel='noopener noreferrer' className='rounded-full border-2 border-text-muted dark:border-text-muted-dark text-text-muted dark:text-text-muted-dark inline-flex p-2 cursor-pointer hover:bg-text-muted hover:text-white dark:hover:bg-text-muted-dark dark:hover:text-black transition-all duration-300'>
                        <FiGithub />
                    </a>

                    <a href={websiteLink} target='_blank' rel='noopener noreferrer' className='rounded-full border-2 border-text-muted dark:border-text-muted-dark text-text-muted dark:text-text-muted-dark inline-flex p-2 cursor-pointer hover:bg-text-muted hover:text-white dark:hover:bg-text-muted-dark dark:hover:text-black transition-all duration-300'>
                        <GoArrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard