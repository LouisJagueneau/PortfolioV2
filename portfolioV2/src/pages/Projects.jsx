import { useState } from 'react';
import WorkCard from '../components/WorkCard';
import Header from '../components/Header';

// Exemple d'images temporaires
import tempImage from '../assets/tempImage.png';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'PowerPlatform', 'Web', 'Software'];

    const projects = [
        {
            title: 'GUPE',
            description: 'GUPE is an application developed using PowerPlatform. This logistics application is designed to accurately catalog and monitor pressure equipment.',
            tags: ['PowerPlatform'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: 'FSL',
            description: 'FSL is a logistics application developed on PowerPlatform. It facilitates the tracking and management of hoses and valves. My job is to maintain this application.',
            tags: ['PowerPlatform'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio built with React and TailwindCSS.',
            tags: ['Web', 'React', 'TailwindCSS'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
        {
            title: 'Inventory Software',
            description: 'A desktop software for managing inventory and stock levels.',
            tags: ['Software', 'PHP'],
            githubLink: '#',
            websiteLink: '#',
            image: tempImage
        },
    ];

    const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen ">
            <Header />
            <div className="container mx-auto px-5 md:px-14 lg:px-20 py-10 flex flex-col items-center">
                {/* Title Div */}
                <div className="text-center mb-10">
                    <span className="uppercase font-rem text-primary tracking-widest text-[0.85rem] ">Projects</span>
                    <h2 className="font-rem font-bold text-[35px] text-text dark:text-text-dark">My Work</h2>
                </div>
                {/* Filters */}
                <div className="flex gap-4 mb-10">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-md font-poppins font-medium ${activeFilter === filter ? 'bg-primary text-white' : 'bg-bg-light dark:bg-bg-light-dark text-text dark:text-text-dark'
                                } transition-colors`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {filteredProjects.map((project, index) => (
                        <WorkCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            githubLink={project.githubLink}
                            websiteLink={project.websiteLink}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
