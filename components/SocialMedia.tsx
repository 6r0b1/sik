import Link from "next/link";
import React from "react";

function SocialMedia() {
    return (
        <div>
            <div className="social_links_container">
                <Link
                    href={
                        "https://www.youtube.com/channel/UCLA8nDtc9KlzVYiDrehRfqQ"
                    }
                    target="_blank"
                >
                    <img
                        className="social_links"
                        src={`/assets/social/youtube_light.svg`}
                        alt=""
                    />
                </Link>
                <Link
                    href={"https://www.facebook.com/MuseumVillaRot"}
                    target="_blank"
                >
                    <img
                        className="social_links"
                        src={`/assets/social/facebook_light.svg`}
                        alt=""
                    />
                </Link>
                <Link
                    href={"https://www.instagram.com/museumvillarot"}
                    target="_blank"
                >
                    <img
                        className="social_links"
                        src={`/assets/social/instagram_light.svg`}
                        alt=""
                    />
                </Link>
            </div>
        </div>
    );
}

export default SocialMedia;
