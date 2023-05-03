import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";
import { useState, useEffect } from "react";

import SocialMedia from "./SocialMedia";

function Header({ location, nav, lang }) {
    const [menuState, setMenuState] = useState("_closed");
    const [navBackground, setNavBackground] = useState("_transparent");
    const { asPath } = useRouter();
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    function handleScroll() {
        if (window.scrollY > 0) {
            setNavBackground("_solid");
        } else {
            setNavBackground("_transparent");
        }
    }
    function openMenu() {
        setMenuState("_open");
        // setNavBackground("_solid");
    }
    function closeMenu() {
        setMenuState("_closed");
        if (window.scrollY === 0) {
            // setNavBackground("_transparent");
        }
    }
    function toggleMenu() {
        if (menuState === "_open") {
            closeMenu();
        } else {
            openMenu();
        }
    }
    return (
        <>
            <header>
                <div className="menu_button_mobile" onClick={toggleMenu}>
                    {/* <img
                        className="menu_icon"
                        src="/controls/menu.svg"
                        alt="menu button"
                    /> */}
                    <div className="inner_circle"></div>
                </div>
                <div className={`nav_wrapper${navBackground}`}>
                    <div className="nav_bar">
                        <p className="logo">
                            <Link className="logo_link" id="home" href="/">
                                sIk
                            </Link>
                        </p>
                        <div className="menu_button" onMouseEnter={openMenu}>
                            <div className="inner_circle"></div>
                        </div>
                        <p className="breadcrumb">{location}</p>
                    </div>
                    <div
                        className={"menu" + menuState}
                        onMouseLeave={closeMenu}
                    >
                        <menu>
                            <div
                                className="menu_button_mobile"
                                onClick={toggleMenu}
                            >
                                <img
                                    className="menu_icon"
                                    src="/controls/close.svg"
                                    alt="menu button"
                                />
                            </div>
                            <div className="main_nav">
                                <Link
                                    className="main_nav_link"
                                    id="works"
                                    href="/works"
                                    onClick={closeMenu}
                                >
                                    {nav.works}
                                </Link>
                                <Link
                                    className="main_nav_link"
                                    id="about"
                                    href="/about"
                                    onClick={closeMenu}
                                >
                                    {nav.about}
                                </Link>
                                <Link
                                    className="main_nav_link"
                                    id="contact"
                                    href={`mailto:mail@should-I-know.com?subject=${nav.email_subject}}`}
                                    onClick={closeMenu}
                                >
                                    {nav.contact}
                                </Link>
                            </div>
                            <div className="additional_nav">
                                <div>
                                    {lang === "_de" ? (
                                        <Link
                                            href={`${asPath}`}
                                            locale="en_GB"
                                            className="additional_nav_link"
                                        >
                                            English
                                        </Link>
                                    ) : (
                                        <Link
                                            href={`${asPath}`}
                                            locale="de_DE"
                                            className="additional_nav_link"
                                        >
                                            Deutsch
                                        </Link>
                                    )}
                                </div>
                                <SocialMedia />
                            </div>
                        </menu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
