import { motion } from "framer-motion";

function SkillBox({ Icon, title, keyWords = [], color, isImage, category }) {
    const categoryColors = {
        'frontend': 'from-blue-500 to-purple-600',
        'backend': 'from-green-500 to-teal-600',
        'nocode': 'from-orange-500 to-red-600'
    };

    return (
        <motion.div 
            className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ 
                scale: 1.05,
                y: -5
            }}
            transition={{ duration: 0.2 }}
        >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* Icon and title */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColors[category]} shadow-lg`}>
                    {isImage ? (
                        <img src={Icon} width={24} height={24} alt={title} className="filter brightness-0 invert" />
                    ) : (
                        <Icon className={`${color} text-2xl text-white`} />
                    )}
                </div>
                
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {title}
                </h4>
                
                {/* Keywords */}
                <div className="flex flex-wrap gap-1 justify-center">
                    {keyWords.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
export default SkillBox;
