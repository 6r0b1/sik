import Link from "next/link";

import React from "react";
import { useState } from "react";

import SocialMedia from "./SocialMedia";

function Header() {
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
                <p>s-I-k</p>
                <div className="menu_button" onMouseEnter={openMenu}>
                    <div className="inner_circle"></div>
                </div>
                <p>home</p>
            </div>
            <div className={"menu" + menuState} onMouseLeave={closeMenu}>
                <div className="nav_wrapper">
                    <div className="main_nav">
                        <Link
                            className="main_nav_link"
                            href="/"
                            onClick={closeMenu}
                        >
                            home
                        </Link>
                        <Link
                            className="main_nav_link"
                            href="/works"
                            onClick={closeMenu}
                        >
                            works
                        </Link>
                        <Link
                            className="main_nav_link"
                            href="/about"
                            onClick={closeMenu}
                        >
                            about
                        </Link>
                        <Link
                            className="main_nav_link"
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
                                href="/einfache-sprache"
                            >
                                en
                            </Link>{" "}
                            |{" "}
                            <Link
                                className="additional_nav_link"
                                href="/einfache-sprache"
                            >
                                deu
                            </Link>{" "}
                            |{" "}
                            <Link
                                className="additional_nav_link"
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
