import SkillBox from "./SkillBox";
import { motion } from "framer-motion";
function SkillSection({ title, skills, category }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };


    return (
        <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.div 
                variants={itemVariants}
                className="text-center mb-10"
            >
                <div className="inline-flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {title}
                    </h3>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </motion.div>
            
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <SkillBox {...skill} category={category} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default SkillSection