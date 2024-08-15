import { useState } from 'react';
import RussianServiceEvening from './russianServiceEvening';
import EngServiceEvening from './engServiceEvening';
import EngServiceMorning from './EngServiceMorning';
import RussianServiceMorning from './RussianServiceMorning';
import { useLocation } from 'react-router';
export default function ChangedLanguage() {
    const location = useLocation();
    const { serviceType } = location.state || {};
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeBtn, setActiveBtn] = useState(serviceType ? serviceType : "Evening");
    
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleClick = (btnName: string) => {
        setActiveBtn(btnName);
    };

    return (
        <>
            <>
                <div className="container">
                    <div className="center-container" style={{ background: "#E7E7E7", padding: "8px", borderRadius: "9px", marginTop: "16px" }}>
                        <div
                            className={`changed-btn ${activeBtn === 'Evening' ? 'active' : ''}`}
                            onClick={() => handleClick('Evening')}
                        >
                            Evening
                        </div>
                        <div
                            className={`changed-btn ${activeBtn === 'Morning' ? 'active' : ''}`}
                            onClick={() => handleClick('Morning')}
                        >
                            Morning
                        </div>
                    </div>
                </div>
            </>
            <div className="container" style={{ paddingTop: "16px" }}>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div
                        onClick={() => handleTabClick('tab1')}
                        style={{
                            flex: 1,
                            padding: '10px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            background: activeTab === 'tab1' ? '#DBF2E0' : 'white',
                            borderRadius: '9px 9px 0px 0px',
                            borderTop: "1px solid #E7E7E7",
                            borderLeft: "1px solid #E7E7E7",
                            borderRight: "1px solid #E7E7E7", fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "20px",
                            color: activeTab === "tab1" ? "black" : "#808080",

                        }}
                    >
                        English
                    </div>
                    <div
                        onClick={() => handleTabClick('tab2')}
                        style={{
                            flex: 1,
                            padding: '10px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            background: activeTab === 'tab2' ? '#DBF2E0' : 'white',
                            borderRadius: '9px 9px 0px 0px',
                            borderTop: "1px solid #E7E7E7",
                            borderLeft: "1px solid #E7E7E7",
                            borderRight: "1px solid #E7E7E7",
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "20px",
                            color: activeTab === "tab2" ? "black" : "#808080",
                            transition: "all 0.3s ease",

                        }}
                    >
                        Russian
                    </div>
                </div>
                <div style={{}}>
                    {activeTab === 'tab1' && (
                        <div style={{
                            borderBottom: "1px solid #E7E7E7",
                            borderLeft: "1px solid #E7E7E7",
                            borderRight: "1px solid #E7E7E7"
                        }}>
                            {activeBtn === 'Morning' ? <EngServiceMorning /> : <EngServiceEvening />}
                        </div>
                    )}

                    {activeTab === 'tab2' && (
                        <div style={{
                            borderBottom: "1px solid #E7E7E7",
                            borderLeft: "1px solid #E7E7E7",
                            borderRight: "1px solid #E7E7E7"
                        }}>
                            {activeBtn === 'Morning' ? <RussianServiceMorning /> : <RussianServiceEvening />}
                        </div>
                    )}
                </div>
            </div >
        </>
    );
}