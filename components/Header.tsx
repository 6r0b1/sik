import Link from "next/link";

import React from "react";
import { useState } from "react";

import SocialMedia from "./SocialMedia";

function Header({ location }) {
    const [menuState, setMenuState] = useState("_closed");
    function openMenu() {
        setMenuState("_open");
    }
    function closeMenu() {
        setMenuState("_closed");
    }
    return (
        <header>
            <div className="nav_bar">
                <p className="logo">should-I-know</p>
                <div className="menu_button" onMouseEnter={openMenu}>
                    <div className="inner_circle"></div>
                </div>
                <p className="breadcrumb">{location}</p>
            </div>
            <div className={"menu" + menuState} onMouseLeave={closeMenu}>
                <div className="nav_wrapper">
                    <div className="main_nav">
                        <Link
                            className="main_nav_link"
                            id="home"
                            href="/"
                            onClick={closeMenu}
                        >
                            home
                        </Link>
                        <Link
                            className="main_nav_link"
                            id="works"
                            href="/works"
                            onClick={closeMenu}
                        >
                            works
                        </Link>
                        <Link
                            className="main_nav_link"
                            id="about"
                            href="/about"
                            onClick={closeMenu}
                        >
                            about
                        </Link>
                        <Link
                            className="main_nav_link"
                            id="contact"
                            href="/contact"
                            onClick={closeMenu}
                        >
                            contact
                        </Link>
                    </div>
                    <div className="additional_nav">
                        <div>
                            <Link
                                className="additional_nav_link"
                                id="english-language"
                                href="/einfache-sprache"
                            >
                                en
                            </Link>{" "}
                            |{" "}
                            <Link
                                className="additional_nav_link"
                                id="deutsche-sprache"
                                href="/einfache-sprache"
                            >
                                deu
                            </Link>{" "}
                            |{" "}
                            <Link
                                className="additional_nav_link"
                                id="einfache-sprache"
                                href="/einfache-sprache"
                            >
                                einfach
                            </Link>
                        </div>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
