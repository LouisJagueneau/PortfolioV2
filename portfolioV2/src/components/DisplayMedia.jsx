

function DisplayMedia({Icon}) {
    return (
        <div className="rounded-full border-2 border-black/70 p-3 text-black/70 dark:text-white/70 dark:border-white/70 hover:bg-black/70 hover:text-bg-light transition-all duration-300 cursor-pointer
                        flex items-center justify-center 2xl:text-lg 2xl:w-14 2xl:h-14">
            <Icon/>
        </div>
    )
}


export default DisplayMedia