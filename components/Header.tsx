import React from "react";
import "./Header.css";
import zurbLogo from "../resources/images/logo_navbar.png";
import kStarLogo from "../resources/images/kyivstar_logo.png";


export const Header: React.FC<{
    textHeader: String,
    textRightBanner: String
}> = ({
    textHeader,
    textRightBanner
}) => {
    function buttonClick(){
        return this.setState({
            backgound: "#CBE11E"
        })
    } 

    return (
        <header>
            <div id="banner">
                <div id="banner_left">
                    <img src={zurbLogo}></img>
                    <h1>{textHeader}</h1>
                </div>
                <div id="banner_right">
                    <img src={kStarLogo}></img>
                    <h2 dangerouslySetInnerHTML={{__html:textRightBanner}}></h2>
                </div>
            </div>
                <div id="buttons">
                    <a><div id="button" ><p>ПРО НАC</p></div></a>
                    <a><div id="button"><p>АБОНЕНТАМ</p></div></a>
                    <a><div id="button"><p>ПІДКЛЮЧИТИСЯ</p></div></a>
                    <a><div id="button"><p>НОВИНИ</p></div></a>
                </div>
        </header>
    );
}