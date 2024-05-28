import React from "react";
import "./Header.css" 


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
                    <h1>{textHeader}</h1>
                </div>                
                <div id="banner_right">
                    <h2>{textRightBanner}</h2>
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