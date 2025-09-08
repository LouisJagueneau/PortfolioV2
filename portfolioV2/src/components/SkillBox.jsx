function SkillBox({ Icon, title, keyWords = [], color }) {

    return (
        <div>
            <div className="flex flex-col gap-2 mb-1">
                <Icon className={`${color} text-[1.4rem]`} />
                <span className="font-poppins font-medium text-black/75">{title}</span>
            </div>
            <div className="text-[0.8rem] font-poppins text-text-muted flex flex-wrap gap-1">
                {keyWords.map((keyWord, index) => {
                    return (
                        <span key={index}>{keyWord}{index === keyWords.length - 1 ? '' : ','}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillBox