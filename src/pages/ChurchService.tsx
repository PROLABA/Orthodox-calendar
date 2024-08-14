import ChangedLanguage from "../components/changedLanguage";
import ChangeService from "../components/changeService";
import ChangeServiceCalendar from "../components/changeServiceCalendar";
import ChangeServiceHeader from "../components/changeServiceHeader";

export default function ChurchService() {
    return (<>
        <ChangeServiceHeader />
        <ChangeServiceCalendar />
        <ChangeService />
        <ChangedLanguage />
    </>
    )
}