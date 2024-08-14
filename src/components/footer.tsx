import { Flex } from "antd";
import Star from "./../assets/Star.svg"
import ActiveStar from "./../assets/ActiveStar.svg"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function FooterPages() {
    const location = useLocation();
    const [activePage, setActivePage] = useState(() => {
        if (location.pathname === "/") return "Home";
        if (location.pathname === "/churchService") return "Church service";
        return "Home";
    });
    const handleClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <div>
            <div className="container">
                <div className="footer-nav">
                    <Link to={"/team"} className="nav-item" onClick={() => handleClick("Team")}>
                        <Flex align="center" gap={"8px"}>
                            <div className="icon-nav">
                                <img src={activePage === "Team" ? ActiveStar : Star} alt="" />
                            </div>
                            <a href="#" className={activePage === "Team" ? "active" : ""}>Team</a>
                        </Flex>
                    </Link>
                    <Link to={""} className="nav-item" onClick={() => handleClick("Chat")}>
                        <Flex align="center" gap={"8px"}>
                            <div className="icon-nav">
                                <img src={activePage === "Chat" ? ActiveStar : Star} alt="" />
                            </div>
                            <a href="#" className={activePage === "Chat" ? "active" : ""}>Chat</a>
                        </Flex>
                    </Link>
                    <Link to={"/"} className="nav-item" onClick={() => handleClick("Home")}>
                        <Flex align="center" gap={"8px"}>
                            <div className="icon-nav">
                                <img src={activePage === "Home" ? ActiveStar : Star} alt="" />
                            </div>
                            <a href="#" className={activePage === "Home" ? "active" : ""}>Home</a>
                        </Flex>
                    </Link >
                    <Link to={"/churchService"} className="nav-item" onClick={() => handleClick("Church service")}>
                        <Flex align="center" gap={"8px"}>
                            <div className="icon-nav">
                                <img src={activePage === "Church service" ? ActiveStar : Star} alt="" />
                            </div>
                            <a href="#" className={activePage === "Church service" ? "active" : ""}>Church service</a>
                        </Flex>
                    </Link>
                    <Link to={""} className="nav-item" onClick={() => handleClick("Library")}>
                        <Flex align="center" gap={"8px"}>
                            <div className="icon-nav">
                                <img src={activePage === "Library" ? ActiveStar : Star} alt="" />
                            </div>
                            <a href="#" className={activePage === "Library" ? "active" : ""}>Library</a>
                        </Flex>
                    </Link >
                </div>
            </div>
        </div>
    );
}