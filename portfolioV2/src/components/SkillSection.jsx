import SkillBox from "./SkillBox";
import { motion
    
 } from "framer-motion";
function SkillSection({ title, skills }) {

    const FromTop = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({ opacity: 1, y: 0, transition: { duration: 0.3, delay: custom } })
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 mb-10 xl:mb-15 2xl:mb-20">
            <div>
                <h3 className="font-rem text-[1.6rem] font-medium relative inline-flex text-text dark:text-text-dark">
                    {title}
                    <span className="absolute bg-primary h-[0.10rem] w-full rounded-full left-0 bottom-[-5px]"></span>
                </h3>
            </div>
            <div className="grid grid-    cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        variants={FromTop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i * 0.2} // délai croissant (0, 0.2, 0.4, etc.)
                    >
                        <SkillBox key={i} {...skill} />
                    </motion.div>

                ))}
            </div>
        </div>
    );
}

export default SkillSection