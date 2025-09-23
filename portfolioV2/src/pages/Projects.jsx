import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WorkCard from '../components/WorkCard';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";

// Exemple d'images temporaires
import tempImage from '../assets/tempImage.png';

// Composant principal
function Projects() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'PowerPlatform', 'Web', 'Software'];

    const projects = [
        {
            title: t('projects.grill.title', 'Restaurant Management System'),
            description: t('projects.grill.description'),
            tags: ['Web', 'MERN', 'MongoDB', 'Express'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: t('projects.bigband64.title', 'Big Band 64 Website'),
            description: t('projects.bigband64.description'),
            tags: ['Web', 'React', 'TailwindCSS'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: t('projects.forta.title', 'Forta Corporate Website'),
            description: t('projects.forta.description'),
            tags: ['Web', 'React', 'MySQL', 'PHP'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: t('projects.gupe.title', 'GUPE Management System'),
            description: t('projects.gupe.description'),
            tags: ['PowerPlatform', 'Power Apps', 'Dataverse'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: t('projects.fsl.title', 'FSL Workflow Automation'),
            description: t('projects.fsl.description'),
            tags: ['PowerPlatform', 'SharePoint', 'Dataverse'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: t('projects.inventory_software.title', 'Inventory Management Software'),
            description: t('projects.inventory_software.description'),
            tags: ['Software', 'C++', 'MySQL', 'Desktop'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
    ];

    const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.tags.includes(activeFilter));

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen">
            <Header/>
            {/* Hero Section dans le style original */}
            <section className="relative bg-bg-secondary dark:bg-bg-secondary-dark overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary/2 rounded-full blur-3xl"></div>
                    
                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: Math.random() * 100 + '%',
                                scale: 0
                            }}
                            animate={{
                                y: [null, '-20px', '20px', '-20px'],
                                x: [null, '10px', '-10px', '10px'],
                                scale: [0, 1, 0.7, 1],
                                opacity: [0, 0.6, 0.3, 0.6]
                            }}
                            transition={{
                                duration: 6 + i * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.8
                            }}
                        />
                    ))}
                </div>

                <div className="relative container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[80px] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] mb-2 block">
                            {t('projects.title_span', 'Portfolio')}
                        </span>
                        <h1 className="font-rem font-bold text-[45px] md:text-[55px] text-text dark:text-text-dark mb-4">
                            {t('projects.title_h2', 'My Projects')}
                        </h1>
                        <div className="w-20 h-0.5 bg-primary rounded-full mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] py-[65px]">
                
                {/* Filters dans le style original */}
                <motion.div 
                    className="flex flex-wrap gap-4 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-md font-poppins font-medium transition-all duration-300 ${
                                activeFilter === filter 
                                    ? 'bg-primary text-white shadow-lg hover:bg-primary-hover' 
                                    : 'bg-bg-light dark:bg-bg-light-dark text-text dark:text-text-dark border border-black/10 dark:border-white/10 hover:border-primary/50 hover:text-primary'
                            }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {t(`filters.${filter.toLowerCase()}`, filter)}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div key={`${activeFilter}-${index}`} variants={itemVariants}>
                                <WorkCard {...project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <motion.div 
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="font-rem text-xl font-semibold text-text dark:text-text-dark mb-2">
                            No projects found
                        </h3>
                        <p className="font-poppins text-text-muted dark:text-text-muted-dark">
                            Try selecting a different filter to see more projects.
                        </p>
                    </motion.div>
                )}
               
            </div>
        </div>
    );
}

export default Projects;