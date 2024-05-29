import React from "react";
import "./Header.css";
import zurbLogo from "../resources/images/logo_navbar.png";
import kStarLogo from "../resources/images/kyivstar_logo.png";
import vFoneLogo from "../resources/images/vodafone_logo.png";
import lCellLogo from "../resources/images/lifecell_logo.png";
import emailLogo from "../resources/images/email_logo.png";


export const Header: React.FC<{
    textHeader: String,
    textRightBanner: Array<string>
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
                    <div>
                    <img id="banner_logo" src={kStarLogo}></img>
                    <h2>{textRightBanner[0]}<br/></h2>
                    <img id="banner_logo" src={vFoneLogo}></img>
                    <h2>{textRightBanner[1]}<br/></h2>
                    <img id="banner_logo" src={lCellLogo}></img>
                    <h2>{textRightBanner[2]}<br/></h2>
                    <img id="banner_logo" src={kStarLogo}></img>
                    <h2>{textRightBanner[3]}</h2>
                    </div>
                </div>
            </div>
        </header>
    );
}