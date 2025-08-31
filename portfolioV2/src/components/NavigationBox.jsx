import { FaArrowRightLong } from "react-icons/fa6"
import { GoLightBulb } from "react-icons/go"
import { LuGraduationCap } from "react-icons/lu"
import { PiBagSimple } from "react-icons/pi"

const navItems = [
  {
    icon: <GoLightBulb />,
    title: "My Projects",
    subtitle: "Over +20 projects completed",
  },
  {
    icon: <LuGraduationCap />,
    title: "My Education",
    subtitle: "5 years in computer science",
  },
  {
    icon: <PiBagSimple />,
    title: "My Experiences",
    subtitle: "5 position holded",
  },
]

function NavigationBox() {
  return (
    <div className="flex flex-col bg-bg-light dark:bg-bg-light-dark w-full rounded-md">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full
                     hover:bg-hover-bg-light hover:dark:bg-hover-bg-light-dark
                     rounded-md p-4 cursor-pointer"
        >
          {/* Bloc gauche */}
          <div className="flex items-center gap-5">
            <div className="border border-black/10 rounded-md p-2 text-xl">
              {item.icon}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-text dark:text-text-dark font-poppins font-medium text-[0.9rem]">
                {item.title}
              </span>
              <p className="text-text-muted dark:text-text-muted-dark text-[0.7rem] font-poppins font-light">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Flèche */}
          <FaArrowRightLong />
        </div>
      ))}
    </div>
  )
}

export default NavigationBox
