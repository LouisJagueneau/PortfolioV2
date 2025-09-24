import QuoteBox from "./QuoteBox"
import NavigationBox from "./NavigationBox"
import MediaSideBar from "./MediaSideBar"
import CodingImage from "./CodingImage"
import { motion } from "framer-motion"


function SidePanelPC() {

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -30 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, delay: 1.1 } }
    }
    const cardVariants2 = {
        hidden: { opacity: 0, scale: 0.8, rotate: -30 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, delay: 1.4 } }
    }
    const cardVariants3 = {
        hidden: { opacity: 0, scale: 0.8, rotate: -30 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, delay: 1.7 } }
    }
    const cardVariants4 = {
        hidden: { opacity: 0, scale: 0.8, rotate: -30 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4, delay: 2 } }
    }


    return (
        <div className="lg:flex lg:flex-col lg:gap-3 lg:justify-between 
                        xl:gap-4
                        2xl:flex 2xl:flex-col 2xl:gap-6">

            <div className="flex flex-col 2xl:gap-10
                            2xl:grid 2xl:grid-cols-7 2xl:col-span-4">
                <motion.div
                    initial='hidden'
                    variants={cardVariants}
                    animate="visible"
                    viewport={{ once: true }}
                    className="col-span-4">
                    <NavigationBox />
                </motion.div>
                <motion.div className="hidden 2xl:flex col-span-3"
                    initial='hidden'
                    variants={cardVariants2}
                    animate="visible"
                    viewport={{ once: true }}>
                    <CodingImage />
                </motion.div>
            </div>

            <div className="flex flex-col gap-3 2xl:gap-10
                            xl:gap-4
                            2xl:grid 2xl:grid-cols-3 2xl:col-span-2">
                <motion.div className="col-span-1"
                    initial='hidden'
                    variants={cardVariants3}
                    animate="visible"
                    viewport={{ once: true }}>
                    <MediaSideBar />
                </motion.div>
                <motion.div className="col-span-2"
                    initial='hidden'
                    variants={cardVariants4}
                    animate="visible"
                    viewport={{ once: true }}>
                    <QuoteBox />
                </motion.div>
            </div>


        </div>
    )
}

export default SidePanelPC