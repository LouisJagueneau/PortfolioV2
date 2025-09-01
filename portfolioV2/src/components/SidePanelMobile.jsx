import QuoteBox from "./QuoteBox"
import NavigationBox from "./NavigationBox"
import MediaSideBar from "./MediaSideBar"


function SidePanelMobile() {
    return (
        <div className="flex flex-col gap-4
                        md:flex-row">
            <div className="flex gap-4
                            md:flex-3">
                <MediaSideBar />
                <NavigationBox />
            </div>
            <div className="md:flex-2">
                <QuoteBox />
            </div>
        </div>
    )
}

export default SidePanelMobile