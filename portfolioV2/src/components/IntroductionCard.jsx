import { motion } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";

function IntroductionCard({ title, description }) {
    return (
        <motion.div 
            className="relative group h-full"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Glowing background effect */}
            <div className="absolute inset-0 hover:bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl  transition-all duration-300 scale-105"></div>
            
            {/* Main card */}
            <div className="relative h-full flex flex-col p-6 gap-3 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/8 dark:to-white/3  rounded-2xl border border-white/20 dark:border-white/10 shadow-lg group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300">
                
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-2xl opacity-60"></div>
                
                {/* Header with icon */}
                <div className="flex items-center gap-1 text-[1.1rem] 2xl:text-[1.2rem]">
                    <motion.div
                        className="flex items-center justify-center"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <RiArrowRightSLine className="text-primary text-2xl" />
                    </motion.div>
                    <h4 className="font-rem font-medium bg-gradient-to-r from-text to-text-muted dark:from-text-dark dark:to-text-muted-dark bg-clip-text text-transparent">
                        {title}
                    </h4>
                </div>
                
                {/* Description */}
                <div className="flex-1 pl-2">
                    <p className="font-poppins text-[0.8rem] 2xl:text-[0.9rem] text-justify text-text-muted dark:text-text-muted-dark leading-relaxed">
                        {description}
                    </p>
                </div>
                
                {/* Bottom accent line */}
                <motion.div 
                    className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                ></motion.div>
                
                {/* Corner decorations */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-primary/30 rounded-full group-hover:bg-primary/50 transition-colors duration-300"></div>
            </div>
        </motion.div>
    );
}

export default IntroductionCard;