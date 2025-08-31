function NavigationCard({ Icon, title, subtitle }) {
    return (
        <div className="flex items-center justify-between hover:bg-hover-bg-light hover:dark:bg-hover-bg-light-dark rounded-md p-4 cursor-pointer">
            <div className="flex items-center gap-5">
                <div className="border border-black/10 rounded-md p-2 text-xl">
                    <Icon />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-text dark:text-text-dark font-poppins font-medium text-[0.9rem]">{title}</span>
                    <p className="text-text-muted dark:text-text-muted-dark text-[0.7rem] font-poppins font-light">{subtitle}</p>
                </div>
            </div>
            <FaArrowRightLong />
        </div>
    )
}
export default NavigationCard