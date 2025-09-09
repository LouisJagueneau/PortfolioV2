import { motion, useScroll } from "framer-motion";

function ScrollProgress({ children }) {

    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 origin-left bg-primary h-[0.2rem]"
            />

            {children}
        </>
    )
}

export default ScrollProgress