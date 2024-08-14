import Team from "../components/team";
import Tiles from "../components/tiles";
import Headr from '../components/headr.tsx'
import CalendarSwiper from "../components/calendarSwipers"
export default function HomePages() {
    return (<>
        <Headr />
        <CalendarSwiper />
        <Tiles />
        <Team />
    </>
    )
}