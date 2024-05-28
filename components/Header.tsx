import React from "react";
import "./Header.css" 


export const Header: React.FC<{
    textHeader: String
}> = ({
    textHeader
}) => {
    function buttonClick(){
        return this.setState({
            backgound: "#CBE11E"
        })
    } 

    return (
        <header>
            <div id="banner">
                <h1>{textHeader}</h1>
                <div id="buttons">
                    <a><div id="button" ><p>ПРО НАC</p></div></a>
                    <a><div id="button"><p>АБОНЕНТАМ</p></div></a>
                    <a><div id="button"><p>ПІДКЛЮЧИТИСЯ</p></div></a>
                    <a><div id="button"><p>НОВИНИ</p></div></a>
                </div>
            </div>
        </header>
    );
}