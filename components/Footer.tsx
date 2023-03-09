import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_links">
                    <p className="footer_p">should-I-know</p>
                    <p className="footer_p">contact</p>
                    <p className="footer_p">privacy</p>
                    <p className="footer_p">imprint</p>
                    <p className="footer_p">acessibility</p>
                </div>
                <img
                    className="footer_image"
                    src="/assets/pride.png"
                    alt=""
                    srcset=""
                />
            </div>
        </footer>
    );
}

export default Footer;
