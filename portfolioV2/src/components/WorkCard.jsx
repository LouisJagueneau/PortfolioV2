import tempImage from '../assets/tempImage.png'
import { RiArrowRightSLine } from "react-icons/ri";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';


function WorkCard({ tags = [], githubLink, websiteLink, description, title, image }) {
    return (
        <motion.div 
            className="group max-w-[350px] mx-auto bg-bg dark:bg-bg-dark border border-black/10 dark:border-white/10 rounded-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {/* Image Container */}
            <div className="relative w-full mb-5 overflow-hidden">
                <img 
                    className="rounded-t-md w-full h-35 xl:h-40 object-cover transition-transform duration-300 group-hover:scale-105" 
                    src={image || tempImage} 
                    alt={title}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title with arrow */}
                <div className="flex items-center mb-3">
                    <RiArrowRightSLine className="text-primary text-[23px] xl:text-[22px] group-hover:translate-x-1 transition-transform duration-200" />
                    <h4 className="font-rem text-[18px] text-text dark:text-text-dark group-hover:text-primary transition-colors duration-200">{title}</h4>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                    {tags.map((tag, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="font-poppins text-[0.80rem] text-primary px-2 py-[1px] border-1 border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Description */}
                <p className="mb-8 text-text-muted dark:text-text-muted-dark text-justify text-[0.80rem] font-poppins leading-6">
                    {description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border-2 border-text-muted dark:border-text-muted-dark text-text-muted dark:text-text-muted-dark inline-flex p-2 cursor-pointer hover:bg-text-muted hover:text-white dark:hover:bg-text-muted-dark dark:hover:text-black transition-all duration-300 hover:scale-110"
                        >
                            <FiGithub />
                        </a>
                    )}

                    {websiteLink && (
                        <a
                            href={websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border-2 border-text-muted dark:border-text-muted-dark text-text-muted dark:text-text-muted-dark inline-flex p-2 cursor-pointer hover:bg-text-muted hover:text-white dark:hover:bg-text-muted-dark dark:hover:text-black transition-all duration-300 hover:scale-110"
                        >
                            <GoArrowRight />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default WorkCard