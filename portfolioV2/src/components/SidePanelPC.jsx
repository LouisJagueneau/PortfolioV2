import QuoteBox from "./QuoteBox"
import NavigationBox from "./NavigationBox"
import MediaSideBar from "./MediaSideBar"
import CodingImage from "./CodingImage"

function SidePanelPC() {
    return (
        <div className="lg:flex lg:flex-col lg:gap-3 
                        xl:gap-4
                        2xl:flex 2xl:flex-col 2xl:gap-6">
            
            <div className="flex flex-col 2xl:gap-6
                            2xl:grid 2xl:grid-cols-7 2xl:col-span-4">
                <div className="col-span-4"><NavigationBox /></div>
                <div className="hidden 2xl:flex col-span-3"><CodingImage /></div>
            </div>
            
            <div className="flex flex-col gap-3 2xl:gap-6
                            xl:gap-4
                            2xl:grid 2xl:grid-cols-3 2xl:col-span-2">
                <div className="col-span-1"><MediaSideBar /></div>
                <div className="col-span-2"><QuoteBox /></div>
            </div>


        </div>
    )
}

export default SidePanelPC