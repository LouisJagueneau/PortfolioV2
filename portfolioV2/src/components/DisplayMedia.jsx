

function DisplayMedia({Icon, link}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-black/70 p-3 text-black/70 dark:text-white/70 dark:border-white/70 hover:bg-hover-bg-light-dark hover:text-bg-light transition-all duration-300 cursor-pointer
                        flex items-center justify-center 2xl:text-lg 2xl:w-14 2xl:h-14">
            <Icon/>
        </a>
    )
}


export default DisplayMedia