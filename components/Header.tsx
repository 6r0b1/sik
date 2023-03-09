import Link from "next/link";

import React from "react";
import { useState } from "react";

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
            <div
                className={"menu" + menuState} // </header>onMouseLeave={closeMenu}
            >
                <div className="main_nav">
                    <Link href="/" onClick={closeMenu}>
                        home
                    </Link>
                    <Link href="/works" onClick={closeMenu}>
                        works
                    </Link>
                    <Link href="/about" onClick={closeMenu}>
                        about
                    </Link>
                    <Link href="/contact" onClick={closeMenu}>
                        contact
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
