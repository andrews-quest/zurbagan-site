import React from "react";
import "./AdBanner.css"

export const AdBanner: React.FC <{
    ad_banner_src: string
}> = ({
    ad_banner_src
}) => {
    return (
        <div id="ad_banner">
            <img src={ad_banner_src}></img>
        </div>
    )
}