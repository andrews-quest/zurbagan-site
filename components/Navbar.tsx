import React from "react";
import "./Navbar.css";
import logo from "../resources/images/logo_navbar.png";

export const Navbar: React.FC <{

}> = ({

}) => {
    return (
        <div id="navbar">
            <img src={logo}></img>
            <div id="account_button">Мій Кабінет</div>
        </div>
    )
}