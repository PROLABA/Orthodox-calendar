import { Flex } from "antd";
import Star from "./../assets/Star.svg";
import ActiveStar from "./../assets/ActiveStar.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PAGES = {
    HOME: "Home",
    CHURCH_SERVICE: "Church service",
    CHAT: "Chat",
    TEAM: "Team",
    LIBRARY: "Library"
};

export default function FooterPages() {
    const location = useLocation();
    const [activePage, setActivePage] = useState(PAGES.HOME);

    useEffect(() => {
        switch (location.pathname) {
            case "/": setActivePage(PAGES.HOME); break;
            case "/churchService": setActivePage(PAGES.CHURCH_SERVICE); break;
            case "/chat": setActivePage(PAGES.CHAT); break;
            case "/team": setActivePage(PAGES.TEAM); break;
            case "/library": setActivePage(PAGES.LIBRARY); break;
            default: setActivePage(PAGES.HOME);
        }
    }, [location]);

    const NavItem = ({ to, page }: { to: string; page: string }) => (
        <Link to={to} className="nav-item">
            <Flex align="center" gap={"8px"}>
                <div className="icon-nav">
                    <img src={activePage === page ? ActiveStar : Star} alt="" />
                </div>
                <span className={activePage === page ? "active" : ""}>{page}</span>
            </Flex>
        </Link>
    );

    return (
        <div className="container">
            <nav className="footer-nav">
                <NavItem to="/team" page={PAGES.TEAM} />
                <NavItem to="/chat" page={PAGES.CHAT} />
                <NavItem to="/" page={PAGES.HOME} />
                <NavItem to="/churchService" page={PAGES.CHURCH_SERVICE} />
                <NavItem to="/library" page={PAGES.LIBRARY} />
            </nav>
        </div>
    );
}