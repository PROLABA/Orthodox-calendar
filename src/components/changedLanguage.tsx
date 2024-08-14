import  { useState } from 'react';
import RussianService from './russianService';

export default function ChangedLanguage() {
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <>
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
                    {activeTab === 'tab1' && <div style={{
                        height: "",
                    }}></div>}
                    {activeTab === 'tab2' && <div style={{
                        height: "",
                        borderBottom: "1px solid #E7E7E7",
                        borderLeft: "1px solid #E7E7E7",
                        borderRight: "1px solid #E7E7E7",
                    }}><RussianService /></div>}
                </div>
            </div >
        </>
    );
}