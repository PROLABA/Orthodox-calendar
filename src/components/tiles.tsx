
export default function Tiles() {
    return (

        <div className="container" style={{ paddingTop: "24px" }}>
            <div className="flex-container" >
                <div className="sundy-tiles" style={{
                    padding: "32px 21px",
                    borderRadius: "9px",
                    background: "#E7E7E7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'column',
                    gap: "16px",
                    width: "50%",
                }}>
                    <div className="top" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div className="old" style={{
                            display: "flex",
                            flexWrap: 'wrap',
                            flexDirection: "column",
                            alignItems: "center",
                            fontFamily: 'SF Pro',
                            fontSize: "13px",
                            fontWeight: "400",
                            lineHeight: "16px"

                        }}>Old style <span style={{
                            fontFamily: "SF Pro",
                            fontSize: " 13px",
                            fontWeight: " bold",
                            lineHeight: " 16px",

                        }}>1 July</span></div>
                        <div className="sunday" style={{
                            fontFamily: "TriodPostnaja",
                            fontSize: "42px",
                            fontWeight: "500",
                            lineHeight: "46px"
                        }}>SUNDAY</div>
                        <div className="new" style={{
                            display: "flex",
                            flexWrap: 'wrap',
                            flexDirection: "column",
                            alignItems: "center",
                            fontFamily: 'SF Pro',
                            fontSize: "13px",
                            fontWeight: "400",
                            lineHeight: "16px"

                        }}>New Style <span style={{
                            fontFamily: "SF Pro",
                            fontSize: " 13px",
                            fontWeight: " bold",
                            lineHeight: " 16px",

                        }}>14 July</span></div>

                    </div>
                    <p style={{
                        fontWeight: "400",
                        lineHeight: "16px",

                    }} >3rd Sunday After Pentecost/ The Sunday of All Saints of Russia</p>
                    <p style={{ textAlign: "center" }}>No fasting. Tone 2</p>
                </div>
                <div className="two-tiles" style={{ display: "flex", gap: "16px", width: "50%" }}>
                    <div className="first-tiles" style={{
                        border: " 1px solid black",
                        padding: "24px 36px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "58px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "9px"
                    }}>
                        <p style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "20px",

                        }}>Evening church service</p>
                        <div className="btn">Read</div>
                    </div>
                    <div className="second-tiles" style={{
                        border: " 1px solid black",
                        padding: "24px 42px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "58px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "9px"
                    }}>
                        <p style={{
                            fontFamily: "SF Pro",
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "20px",

                        }}>Morninng church service</p>
                        <div className="btn">Read</div>
                    </div>
                </div>
            </div>
        </div >

    )
}