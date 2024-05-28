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
            </div>
            <div id="buttons">
                <a><div id="button" >ПРО НАС</div></a>
                <div id="button">АБОНЕНТАМ</div>
                <div id="button">ПІДКЛЮЧИТИСЯ</div>
                <div id="button">НОВИНИ</div>
            </div>
        </header>
    );
}