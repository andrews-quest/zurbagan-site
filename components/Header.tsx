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
        <>
        <header>
            <div id="banner"></div>
            <div id="banner_text_div">
                <div id="banner_text_half">
                    <div id="logo_and_name">
                        <img src={zurbLogo}></img>
                        <h1>{textHeader}</h1>
                    </div>
                    <h3>ІНТЕРНЕТ-ПРОВАЙДЕР, ЩО ЗАВЖДИ ПОРУЧ</h3>
                </div>
                <div id="banner_text_half">
                    <div>
                    <img id="banner_logo" src={kStarLogo}></img>
                    <h2>{textRightBanner[0]}<br/></h2>
                    <img id="banner_logo" src={vFoneLogo}></img>
                    <h2>{textRightBanner[1]}<br/></h2>
                    <img id="banner_logo" src={lCellLogo}></img>
                    <h2>{textRightBanner[2]}<br/></h2>
                    <img id="banner_logo" src={emailLogo}></img>
                    <h2>{textRightBanner[3]}</h2>
                    </div>
                </div>
            </div>
        </header>
            
        <div id="banner_gradient"></div>
        </>
    );
}