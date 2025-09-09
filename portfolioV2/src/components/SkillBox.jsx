function SkillBox({ Icon, title, keyWords = [], color, isImage }) {
  return (
    <div className="bg-bg-light dark:bg-bg-light-dark dark:border-white/10 border border-black/10 p-4 rounded-md w-45 transition-all duration-300 hover:scale-[105%]">
      <div className="flex flex-col gap-2 mb-1">
        {isImage ? (
          <img src={Icon} width={20} height={20} alt={title} />
        ) : (
          <Icon className={`${color} text-[1.4rem]`} />
        )}
        <span className="font-poppins font-medium text-black/75 dark:text-white/90">
          {title}
        </span>
      </div>

      <div className="text-[0.8rem] font-poppins text-text-muted dark:text-text-muted-dark flex flex-wrap gap-1">
        {keyWords.map((word, index) => (
          <span key={index}>
            {word}
            {index < keyWords.length - 1 && ","}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillBox;
