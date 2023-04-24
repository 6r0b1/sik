import Link from "next/link";
import Image from "next/image";
import React from "react";

function SocialMedia() {
    return (
        <div>
            <div className="social_links_container">
                <Link
                    href={"https://vimeo.com/shouldiknow"}
                    target="_blank"
                    id="vimeo"
                >
                    <Image
                        className="social_links"
                        src="/assets/social/vimeo_light.svg"
                        alt="vimeo logo"
                        width={22}
                        height={22}
                    />
                </Link>
                <Link
                    href={"https://www.instagram.com/should_i_know_/"}
                    target="_blank"
                    id="instagram"
                >
                    <Image
                        className="social_links"
                        src="/assets/social/instagram_light.svg"
                        alt="instagram logo"
                        width={22}
                        height={22}
                    />
                </Link>
                <Link
                    href={
                        "https://www.facebook.com/profile.php?id=100091401890329"
                    }
                    target="_blank"
                    id="facebook"
                >
                    <Image
                        className="social_links"
                        src="/assets/social/facebook_light.svg"
                        alt="facebook logo"
                        width={22}
                        height={22}
                    />
                </Link>
            </div>
        </div>
    );
}

export default SocialMedia;
