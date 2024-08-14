import ChangedLanguage from "../components/changedLanguage";
import ChangeServiceCalendar from "../components/changeServiceCalendar";
import ChangeServiceHeader from "../components/changeServiceHeader";

export default function ChurchService() {
    return (<>
        <ChangeServiceHeader />
        <ChangeServiceCalendar />
        <ChangedLanguage />
    </>
    )
}