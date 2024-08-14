import { useState } from "react"

export default function ChangeService() {
    const [activeBtn, setActiveBtn] = useState('Evening');

    const handleClick = (btnName: string) => {
        setActiveBtn(btnName);
    };
    return (
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
    );
}