import Bale from "./../assets/Bale.svg";
import Settings from "./../assets/Settings.svg";
export default function Headr() {
    return (

        <div style={{ background: "#E7E7E7", borderRadius: "0px 0px 13px 13px", padding: "24px 0px" }}>
            <div className="container">
                <div className="flex-sps-btwn" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1 style={{ fontFamily: "SF Pro", fontWeight: "590", fontSize: "28px", lineHeight: " 32px" }}>Hello, Michael!</h1>
                    <div className="icon" style={{ display: "flex", gap: "16px" }}>
                        <img src={Bale} alt="" />
                        <img src={Settings} />
                    </div>
                </div>
            </div>
        </div>
    )
}