import QuoteBox from "./QuoteBox"
import NavigationBox from "./NavigationBox"
import MediaSideBar from "./MediaSideBar"


function SidePanelMobile() {
    return (
        <div>
            <div className="flex gap-4">
                <MediaSideBar />
                <NavigationBox />
            </div>
        </div>
    )
}

export default SidePanelMobile