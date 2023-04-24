import Link from "next/link";
import React from "react";

function Footer({ nav }) {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_links_container">
                    <Link className="footer_links" href="/">
                        should-I-know
                    </Link>
                    <Link className="footer_links" href="/privacy">
                        {nav.privacy}
                    </Link>
                    <Link className="footer_links" href="/imprint">
                        {nav.imprint}
                    </Link>
                    <Link className="footer_links" href="/accessibility">
                        {nav.accessibility}
                    </Link>
                </div>
                <img className="footer_image" src="/assets/pride.png" alt="" />
            </div>
        </footer>
    );
}

export default Footer;
